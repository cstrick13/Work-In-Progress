import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrl: './splashscreen.component.css'
})
export class SplashscreenComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
        // Successfully logged in, the app.component will handle redirecting
      })
      .catch((error) => {
        this.errorMessage = 'Login failed: ' + error.message;
        console.error('Login error:', error);
      });
  }
}
