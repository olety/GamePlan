import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent }        from './shop/shop.component';
import { ChatComponent }        from './chat/chat.component';
import { CalendarComponent }    from './calendar/calendar.component';
import { DayComponent }         from './day/day.component';
import { LoginComponent }       from './login/login.component';
import { RegisterComponent }    from './register/register.component';

const routes: Routes = [
    { path: 'shop', component: ShopComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'day', component: DayComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }


