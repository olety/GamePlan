import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        DayComponent,
        ShopComponent,
        ChatComponent,
        CalendarComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }