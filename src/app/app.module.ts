import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HelloPageComponent } from './pages/hello-page/hello-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
//import { ComponentsColactionsComponent } from './pages/components-colactions/components-colactions.component';
import { PageComponent } from './components/page/page.component';
import { FormsModule } from '@angular/forms';
import { InputValidatorDirective } from './directives/validators/input-validator.directive';
import { UserService } from './services/user.service';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { BoxComponent } from './components/box/box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    HelloPageComponent,
    DashboardLayoutComponent,
    SideMenuComponent,
    MenuButtonComponent,
    //ComponentsColactionsComponent,
    PageComponent,
    InputValidatorDirective,    
    DialogModalComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MalihuScrollbarModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
