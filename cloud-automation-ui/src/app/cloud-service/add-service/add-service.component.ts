import {Component, OnInit, ViewChild} from '@angular/core';
import {ICloudService, ILabel, ServiceFormBase} from "../../common-model/models";
import {SchemaBuilderComponent} from "../../common-component/schema-builder/schema-builder.component";
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {CloudServiceService} from "../service/cloud-service.service";
import {ExternalDependency, Janus} from "../../common-model/schema.provider";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  public serviceLabels;
  public servicePlans;
  public selectedServiceLabel:any= null;
  public selectedServicePlan: any = null;
  public selectedSchema;
  public childFormSchema;
  public cssSchemaBuilderInner = "form-group col-md-3";

  @ViewChild(SchemaBuilderComponent)
  private schemaBuilderComp : SchemaBuilderComponent;
  items: ServiceFormBase<any>[] = [];
  addServiceFG : FormGroup;

  constructor(private cloudService: CloudServiceService,
              private addServiceFb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.getServiceLabels();
  }

  createForm() {
      this.addServiceFG = this.addServiceFb.group({
      serviceName: ['',Validators.required],
      serviceType: [''],
      servicePlan: [''],
      description: [''],
    });
  }

  getServiceLabels() {
    this.cloudService.getServiceLabel().subscribe((labels)=>{
      this.serviceLabels = labels.json();
    });
  }

  getServicePlans(serviceLabels){
    this.cloudService.getServicePlans(serviceLabels).subscribe((plans)=>{
      this.servicePlans = plans.json();
    });
  }

  onLabelChange(event){
    this.selectedServiceLabel = event;
    this.getServicePlans(this.selectedServiceLabel.id);
  }

  onPlanChange(event){
    this.selectedServicePlan = event;
    this.selectedSchema = event.planSchema;
    this.getFormSchema();
  }
  getFormSchema() {
    let planName = this.selectedServicePlan.name.toLowerCase();
    let labelName = this.selectedServiceLabel.name.toLowerCase();

    if(planName ==='unstructured' && labelName ==="external dependency"){
        this.childFormSchema = ExternalDependency;
    }else if(labelName === 'sso'){
      if(planName === 'siteminder-custom'){

      }else if(planName === 'siteminder-default'){

      }else{
          this.childFormSchema = Janus;
      }
    } else{}
  }


  saveNewService(){
    let planName = this.selectedServicePlan.name.toLowerCase();
    let labelName = this.selectedServiceLabel.name.toLowerCase();

    if(planName ==='unstructured' && labelName ==="external dependency"){
      this.saveExternalService();
    }else if(labelName === 'sso'){
      this.saveSSO();
    }else{}

  }

  private saveExternalService() {
    let credentials = this.schemaBuilderComp.form.get("password").value;
    let credentialsObj ={};
    for(let i; i < credentials.length; i++){
      credentialsObj['cred_'+i] = credentials[i];
    }
    let vaultCredentials = this.schemaBuilderComp.form.get("vaultCredentials").value;
    let vaultCredentialsObj ={};
    for(let i=0; i < vaultCredentials.length; i++){
      vaultCredentialsObj['vlt_cred_'+i] = vaultCredentials[i];
    }
    let schemaObj = {description: this.addServiceFG.get("description").value,
                      destinations: this.schemaBuilderComp.form.get("destinations").value,
                      credentials: credentialsObj, vaultCredentials: vaultCredentials
                    }
    let schemaParam = this.formatJsonToSend(schemaObj);
    schemaParam = "{\"dependencyAsJson\":\""+schemaParam+"\"}";
    this.saveService(schemaParam);
  }

  private formatJsonToSend(schamaParam: any) {
    let schemaObj = JSON.stringify(schamaParam).replace(/:/g,': ');
    schemaObj = schemaObj.replace(/\"/,'\\\"');
    return schemaObj;
  }

  private saveService(schemaParam: any) {
      let cloudService: ICloudService = <ICloudService>{
        name: this.addServiceFG.get("serviceName").value,
        description: this.addServiceFG.get("description").value,
        servicePlan: this.selectedServicePlan,
        parameter: schemaParam,
      };
      this.cloudService.saveNewService(this.cloudService).subscribe();
  }

  private saveSSO() {

  }

  saveAppDynamics(){
    let schemaObj = {hostname: this.schemaBuilderComp.form.get("hostname").value,
                     port: this.schemaBuilderComp.form.get("port").value
                    };
    let schemaParam = JSON.stringify(schemaObj);
    this.saveService(schemaParam);
  }
}
