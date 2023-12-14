import { Component } from '@angular/core';
import { Passenger } from './models/station';
import { TrainsService } from './services/trains.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  registerObj: Passenger = new Passenger();
  loggedUserData: any;
  constructor(private trainService: TrainsService) {
    const localData = localStorage.getItem('trainUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }

  }

  logOff() {
    localStorage.removeItem('trainUser');
    this.loggedUserData = undefined;
  }

  openRegister() {
    const model = document.getElementById('regModel');
    if(model != null) {
      model.style.display = 'block';
    }
  }

  closeRegister() {
    const model = document.getElementById('regModel');
    if(model != null) {
      model.style.display = 'none';
    }
  }

  onRegister() {
    this.trainService.createPassenger(this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert("Registration Success");
        localStorage.setItem('trainUser', JSON.stringify(res.data));
        this.loggedUserData = res.data;
        this.closeRegister();
      } else {
        alert(res.message)
      }
    })
  }

  openLogin() {
    const model = document.getElementById('loginModel');
    if(model != null) {
      model.style.display = 'block';
    }
  }

  closeLogin() {
    const model = document.getElementById('loginModel');
    if(model != null) {
      model.style.display = 'none';
    }
  }

  onLogin() {
    this.trainService.loginPassenger(this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert("Login Success");
        localStorage.setItem('trainUser', JSON.stringify(res.data));
        this.loggedUserData = res.data;
        this.closeLogin();
      } else {
        alert(res.message)
      }
    })
  }
}
