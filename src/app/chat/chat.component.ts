import { Component, OnInit } from '@angular/core';
import { Message } from './Message';
import { MESSAGES } from './mock_messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    message = { user: "user@gmail.com", data: "Hi!" };

    messages = [
        { user: "user@gmail.com", data: "Hi!" },
        { user: "another@gmail.com", data: "Hello, thanks for adding me to the group chat" }
    ];

  constructor() { }

  ngOnInit() {
  }

}
