import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})


export class DayComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

    addingTask: boolean = false;

    public basic: boolean = false;
    today: Date = new Date();

    taskList:  Task[] = [{
            title: 'Mop the floor',
            description: 'Don\'t forget to mop the bathroom too!',
            dueDate: new Date(2017, 12, 4, 21, 0, 0, 0),
            completed: false,
            repeatDays: ['Monday', 'Wednesday']
        },
        {
            title: 'Do the the dishes',
            description: 'And use the hand cream afterwards',
            dueDate: new Date(2017, 12, 4, 15, 30, 0, 0),
            completed: false,
            repeatDays: ['day']
        },
        {
            title: 'VC the room',
            description: 'Don\'t forget to VC the bathroom too!',
            dueDate: null,
            completed: false,
            repeatDays: []
        },
        {
            title: 'Buy food',
            description: 'Get someone to text me the list of products',
            dueDate: new Date(2017, 12, 4, 9, 15, 0, 0),
            completed: true,
            repeatDays: []
        },
        {
            title: 'Water flowers',
            description: '',
            dueDate: new Date(2017, 12, 3, 7, 15, 0, 0),
            completed: true,
            repeatDays: ['Monday', 'Wednesday', 'Friday']
        },
        {
            title: 'Wash the bathroom',
            description: '',
            dueDate: new Date(2017, 12, 3, 8, 35, 0, 0),
            completed: true,
            repeatDays: []
    }]
;

}
