import { Component, OnInit } from '@angular/core';
import { Message } from './Message';
import { MESSAGES } from './mock_messages';
import { Product }  from './Product';
import { PRODUCTS2 } from './mock_products';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    messageSent = { user: "user@gmail.com", data: "" };

    messages = [
        { user: "user@gmail.com", data: "Hi!" },
        { user: "another@gmail.com", data: "Hello, thanks for adding me to the group chat" }
    ];

    emojis: Product[] = PRODUCTS2;

    send() {
        this.messages.push({ user: this.messageSent.user, data: this.messageSent.data });
        this.messageSent.data = '';
    };


  constructor() { }

  ngOnInit() {
  }

}
