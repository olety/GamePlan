import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
    document.getElementsByClassName('menu')[0].style.visibility = 'hidden';
    document.getElementsByClassName('signin')[0].style.visibility = 'hidden';
    document.getElementsByTagName('nav')[0].style.visibility = 'hidden';
  }  

  ngOnInit() {
  }

}
