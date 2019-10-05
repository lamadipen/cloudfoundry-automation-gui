export interface  ILabel{
  id: number,
  name: string
}

export interface IPlan{
    id: number;
    name: string,
    planSchema: any;
    serviceLabel: ILabel;
}

export interface ICloudService{
  id?: number;
  name: string;
  description: string,
  parameter?: any;
  servicePlan: IPlan;
}

export class ServiceFormBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options:{
    value?: T,
    key?:string,
    label?:string,
    required?:boolean,
    order?:number,
    controlType?:string
  }={}){
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.required = options.required;
    this.order = options.order;
    this.controlType = options.controlType;
  }
}
