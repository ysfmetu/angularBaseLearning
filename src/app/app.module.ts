import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import { SellerComponent } from './components/seller/seller.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SellerComponent
  ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
