import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AddPlanComponent } from './service-plan/add-plan/add-plan.component';
import { ListPlanComponent } from './service-plan/list-plan/list-plan.component';
import { ListLabelComponent } from './service-label/list-label/list-label.component';
import { AddLabelComponent } from './service-label/add-label/add-label.component';
import { AddPoolComponent } from './pool/add-pool/add-pool.component';
import { ListPoolComponent } from './pool/list-pool/list-pool.component';
import { ListServiceComponent } from './cloud-service/list-service/list-service.component';
import { AddServiceComponent } from './cloud-service/add-service/add-service.component';
import { AppRoutingModule } from  './app-routing.module';
import { SchemaBuilderComponent } from './common-component/schema-builder/schema-builder.component';
import {CloudServiceService} from "./cloud-service/service/cloud-service.service";

@NgModule({
  declarations: [
    AppComponent,
    AddPlanComponent,
    ListPlanComponent,
    ListLabelComponent,
    AddLabelComponent,
    AddPoolComponent,
    ListPoolComponent,
    ListServiceComponent,
    AddServiceComponent,
    SchemaBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CloudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
