import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
        document.getElementsByClassName('menu')[0].style.visibility = 'hidden';
        document.getElementsByClassName('signin')[0].style.visibility = 'hidden';
        document.getElementsByTagName('nav')[0].style.visibility = 'hidden';
  }

  ngOnInit() {
  }

}
