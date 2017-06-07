import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    //User guard for this
    if(this.userService.user !== null){
      this.router.navigate(['home']);
    }
  }

  onSubmit(){
    const username:string = this.loginForm.value.username;
    const password:string = this.loginForm.value.password;
    this.userService.logIn(username, password);

    this.router.navigate(['/home']);
  }

  ngOnDestroy(){

  }
}
