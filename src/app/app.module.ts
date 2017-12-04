import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { MaterializeModule } from 'angular2-materialize';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';


=======
import { DragulaModule } from 'ng2-dragula';
>>>>>>> Pushing the day/task views
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';

import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
    declarations: [
        AppComponent,
        DayComponent,
        ShopComponent,
        ChatComponent,
        CalendarComponent,
        LoginComponent,
        RegisterComponent,
        TaskComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
<<<<<<< HEAD
        NgxPaginationModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot()
=======
        DragulaModule,
        NgDatepickerModule
>>>>>>> Pushing the day/task views
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
