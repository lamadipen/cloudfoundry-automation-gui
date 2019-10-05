import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Input} from '@angular/core';

@Component({
  selector: 'app-schema-builder',
  templateUrl: './schema-builder.component.html',
  styleUrls: ['./schema-builder.component.css']
})
export class SchemaBuilderComponent implements OnInit {

  public schemaObj: any;
  form: FormGroup;
  schemaArray;
  @Input() cssOuterWrapper;
  @Input() cssInnerWrapper;

  @Input("schemaObjEvt") set schemaObjEvt(evt:any){
    this.schemaObj = evt;
    this.formReload();
  }

  get schemaObjectEvt():any{
    return this.schemaObjectEvt;
  }

  constructor(private schemaFormBuilder: FormBuilder) { }

  ngOnInit() {
    this.formReload();
  }

  setFormArrayFields(fieldArray, formCtrlName){
    let tempDest =[];
    const destFGs = tempDest.push(this.createFormCtrl(fieldArray));
    const destArray = this.schemaFormBuilder.array(tempDest);
    this.form.setControl(formCtrlName, destArray);
  }

  createFromCtrl(fieldArray):FormGroup{
    let tempObj ={};

    for(let field of fieldArray){
      tempObj[field.key] = null;
    }
    return this.schemaFormBuilder.group(tempObj);
  }

  action(event, object){
    let arrayName: string = object.actionFor;
    let buttonKey: string = object.key;

    if((/^add/).test(buttonKey)){
      this.add(arrayName);
    }else{
      this.remove(arrayName);
    }
  }

  private add(arrayName: string){
    let tempFieldArr = this.schemaObj[arrayName].value;
    let obj = {};
    for(let i of tempFieldArr){
      obj[i.key] = null;
    }
    this.getFormArrayByName(arrayName).push(this.schemaFormBuilder.group(obj));
  }
  private remove(arrayName: string) {
    let lastItemIndex = this.getFormArrayByName(arrayName).length;
    if(lastItemIndex >=1){
      lastItemIndex = lastItemIndex -1;
      this.getFormArrayByName(arrayName).removeAt(lastItemIndex)
    }
  }

  private getFormArrayByName(arrayName: string) {
    return this.form.get(arrayName) as FormArray;
  }

  private formReload() {
    //convert schemaObj to array for iteration
    if(this.schemaObj != null && this.schemaObj != undefined){
      this.schemaArray = Object.keys(this.schemaObj).map(schemaKey =>{
        if(this.schemaObj[schemaKey].type === "array"){
          let valArray = Object.keys(this.schemaObj[schemaKey].value).map(innerSkey =>{
            return Object.assign({},{key: innerSkey}, this.schemaObj[schemaKey].value[innerSkey]);
          });
          this.schemaObj[schemaKey].value = valArray;
        }
        return Object.assign({},{key:schemaKey}, this.schemaObj[schemaKey]);
      });
      //creating form group and form object
      const formControls = {};

      for(let prop of Object.keys(this.schemaObj)){
        if(this.schemaObj[prop].type === 'array'){
          formControls[prop] = this.schemaFormBuilder.array([]);
          let valArray = this.schemaObj[prop].value;
          this.setFormArrayFields(valArray,prop);
        }else{
          formControls[prop] = new FormControl(this.schemaObj[prop].value || '');
        }
      }
      this.form = new FormGroup(formControls);

      //to preload the values
      for(let prop of Object.keys(this.schemaObj)){
        if(this.schemaObj[prop].type === 'array'){
          if(this.schemaObj[prop].initSize === 1){
            this.add(prop);
          }
        }
      }
    }
  }

  private createFormCtrl(fieldArray: any) {
    let tempObj = {};

    for(let field of fieldArray){
      tempObj[field.key] = null;
    }
    return this.schemaFormBuilder.group(tempObj);
  }

}
