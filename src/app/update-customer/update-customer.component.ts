import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  customer: Customer = new Customer();

  cust_id !: number;

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
   ){ }



  ngOnInit(): void {
    this.cust_id = this.route.snapshot.params['cust_id']
    this.customerService.getCustomerById(this.cust_id).subscribe(data =>
      {
        this.customer = data;
      },
      error => console.log(error)
      );
             
  }
 

    

  onSubmit(){
   this.customerService.updateCustomer(this.cust_id, this.customer).subscribe(data => {
    this.goToCustomerList();
   }
    ,error => console.log(error)
   );

  }
  
  goToCustomerList(){
    this.router.navigate(['/customer-list']);
 }

}
