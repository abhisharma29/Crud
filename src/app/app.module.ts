import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductServiceService } from "./product-service.service";

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [ProductServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
