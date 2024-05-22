import { Component, OnInit } from '@angular/core';
import { AutentificationRequest } from '../../models/AutentificationRequest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyApiService } from '../../services/my-api.service';
import { HotelApiService } from '../../services/hotel-api.service';
import { Hotel } from '../../models/hotel.model';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  autentificationRequest: AutentificationRequest = new AutentificationRequest();
  message!: string;
  hotels: Array<Hotel> = [];


  constructor(private myApiService: MyApiService,
    private hotelApiService: HotelApiService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.findHotels();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]],
      codeHotel: [''],
    });
  }

  findHotels() {
    this.hotelApiService.findAllActive().subscribe({
      next: (value) => this.hotels = value,
      error: (err) => console.log("err")
    })

  }

  onSubmit() {
    this.myApiService.login(this.loginForm.value).subscribe({
      next: (value) => {
        console.log(value);
         localStorage.setItem('user', JSON.stringify(value));
         this.router.navigateByUrl('/pages/dashboard')
        },
      error: (err) => this.message = err.error.message
    })
  }
}
