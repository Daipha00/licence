import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private baseURL = "http://localhost:8080/api/v1/customer/cust";
  constructor(private httpClient  : HttpClient) { }

  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,customer);
  }

  getCustomerById(cust_id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${cust_id}`)
  }

  updateCustomer(cust_id: number, customer: Customer): Observable<Object>{
       return this.httpClient.put(`${this.baseURL}/${cust_id}`, customer);
      
  }

  deleteCustomer(cust_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${cust_id}`);
  }
}
