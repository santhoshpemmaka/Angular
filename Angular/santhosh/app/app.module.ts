import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product/product-list.component";
import { convertToSpacesPipe } from "src/shared/convert-to-space.pipe";
import { StarComponent } from "src/shared/star.component";
import { HttpClient } from "selenium-webdriver/http";
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product/product-detail.component";
import { ProductDetailGuard } from "./product/product-detail.guard";
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "products", component: ProductListComponent },
      // { path: "welcome", component: WelcomeComponent },
      {
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
