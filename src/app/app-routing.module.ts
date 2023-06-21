import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [ 
   {path:'customer-list',component:CustomerListComponent},
   {path:'create-customer',component:CreateCustomerComponent},
   {path:'',redirectTo: 'login', pathMatch: 'full'},
   {path:'update-customer/:cust_id',component:UpdateCustomerComponent},
   {path:'customer-details/:cust_id',component:CustomerDetailsComponent},
   {path:'registration',component:RegistrationComponent},
   {path:'login',component:LoginComponent}
   

  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
