import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent }        from './shop/shop.component';

const routes: Routes = [
    { path: 'shop', component: ShopComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }


