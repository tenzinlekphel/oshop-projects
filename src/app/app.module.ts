import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './auth.service';
import {AuthGurdService} from './auth-gurd.service';
import {UserService} from './user.service';
import {AdminAuthGuardService} from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {CategoryService} from './category.service';
import {ProductService} from './product.service';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGurdService]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGurdService]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGurdService]},
      {path: 'login', component: LoginComponent},
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGurdService, AdminAuthGuardService]
      },

      {
        path: 'admin/products/new',
        component: AdminProductsComponent,
        canActivate: [AuthGurdService, AdminAuthGuardService]
      },

      {
        path: 'admin/products/:id',
        component: AdminProductsComponent,
        canActivate: [AuthGurdService, AdminAuthGuardService]
      },

      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGurdService, AdminAuthGuardService]
      },

      {
        path: 'admin/orders',
        component: AdminOrdersComponent ,
        canActivate: [AuthGurdService, AdminAuthGuardService]
      },

    ]),
  ],
  providers: [
    AuthService,
    AuthGurdService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
