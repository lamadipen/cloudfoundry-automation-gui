import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AddLabelComponent} from './service-label/add-label/add-label.component';
import {AddServiceComponent} from "./cloud-service/add-service/add-service.component";
import {ListServiceComponent} from "./cloud-service/list-service/list-service.component";

const routes: Routes =[
  { path: '', redirectTo: '/services', pathMatch: 'full'},
  { path:'addLabel', component: AddLabelComponent},
  { path: 'addService', component:AddServiceComponent},
  { path: 'listService', component:ListServiceComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule{}
