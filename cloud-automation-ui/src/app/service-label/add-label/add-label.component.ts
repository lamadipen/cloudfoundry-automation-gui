import { Component, OnInit } from '@angular/core';
import {ILabel} from "../../common-model/models";
import {LabelService} from "../service/label.service";

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.css']
})
export class AddLabelComponent implements OnInit {
  label: ILabel;
  constructor(private labelService: LabelService) { }

  ngOnInit() {
    this.label = {id:null,name:''};
  }

  saveLabel(){
    this.labelService.saveLabel(this.label).subscribe();
  }

}
