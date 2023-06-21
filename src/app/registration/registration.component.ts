// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {

// }

// registration.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // Here, you can implement the logic to handle the form submission
    // For example, you can send the registration details to a server-side API
    console.log(this.user);
    // You can also perform additional validation before submitting the form
  }
}
