import { Component, OnInit } from '@angular/core';
import {CloudServiceService} from "../service/cloud-service.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services:{}[];
  pools:{}[];
  preSelectedPools: any = {};
  perSelectedServices: any ={};
  serviceToDeploy: any[] =[];
  isChecked = false;
  serviceStatusInPool;
  selectedService: any;

  constructor(private cloudService: CloudServiceService) { }

  ngOnInit() {
    this.cloudService.getServices().subscribe((data)=>{
      this.services = data.json();
    });
    this.cloudService.getPools().subscribe((data)=>{
      this.pools =data.json();
    });
  }

  onPoolChecked(option, event){
    this.serviceToDeploy= [];
    if(!event.target.checked && this.preSelectedPools.hasOwnProperty(option.id)){
      delete this.preSelectedPools[option.id];
    }
    if(event.target.checked){
      this.preSelectedPools[option.id] = option;
    }
  }

  onServiceChecked(option, event){
    this.serviceToDeploy = [];
    if(!event.target.checked && this.perSelectedServices.hasOwnProperty(option.id)){
      delete this.perSelectedServices[option.id];
    }
    if(event.target.checked){
      this.perSelectedServices[option.id] = option;
    }
  }

  onDeployService(){
    Object.keys(this.preSelectedPools).map(pIndex => {
      Object.keys(this.perSelectedServices).map(sIndex =>{

        let tempService = JSON.parse(JSON.stringify(this.perSelectedServices[sIndex]));
        tempService.pools = this.preSelectedPools[pIndex];
        console.log("Index of pool"+this.preSelectedPools[pIndex].name);
        console.log(tempService.pool.name);
        this.serviceToDeploy.push(tempService);
      });
    });
    console.log("Checking Pools"+this.serviceToDeploy[0].pool.id);
    this.cloudService.deployService(this.serviceToDeploy).subscribe();
  }

  onSelectAll(event){
    if(!event.target.checked){
      this.isChecked = false;
      this.perSelectedServices ={};
    }
    if(event.target.checked){
      this.isChecked = true;
      for(let service of this.services){
        this.perSelectedServices[service["id"]] = service;
      }
    }
  }

  checkServiceStatusInPool(service){
    let pool = this.preSelectedPools[Object.keys(this.preSelectedPools)[0]];
    this.cloudService.checkServiceStatusPool(service.name,pool.id).subscribe((result)=>{
      this.serviceStatusInPool = result;
      this.serviceStatusInPool = this.serviceStatusInPool._body;
    });
  }
}
