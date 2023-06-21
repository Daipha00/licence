import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit{
  cust_id!: number;
  customer!: Customer;
  
  
  constructor(private route: ActivatedRoute, private customerService: CustomerService){ }

  ngOnInit(): void {
      this.cust_id = this.route.snapshot.params['cust_id'];

      this.customer = new Customer();
      this.customerService.getCustomerById(this.cust_id).subscribe(data =>
        {
          this.customer = data;
        });
  }
  // updateData(){
  //   this.customerService.updateCustomer(this.customer.cust_id, this.customer).subscribe(
  //     (response) =>{
  //       console.log("customer update successfully")
  //     }
  //   )
  // }

}
