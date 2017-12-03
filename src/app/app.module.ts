import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';


import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
        AppComponent,
        DayComponent,
        ShopComponent,
        ChatComponent,
        CalendarComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
