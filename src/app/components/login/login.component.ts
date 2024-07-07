import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Initialized with an empty string
  password: string = ''; // Initialized with an empty string

  // Inject Router in the constructor
  constructor(private router: Router) {}

  onSubmit() {
    // Example login logic: check if username and password match some hardcoded values
    if (this.username === 'admin' && this.password === 'admin123') {
      // If credentials match, navigate to the rooms-list page
      this.router.navigate(['/rooms-list']);
    } else {
      // If credentials do not match, you can handle it accordingly (e.g., show an error message)
      console.log('Invalid credentials');
    }
  }
}