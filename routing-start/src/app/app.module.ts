import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {AppRoutingModule}from './app-routing.module'
import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from 'src/app/auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from 'src/app/servers/server/server-resolver.service';
import { CanDeactivateGuard } from 'src/app/servers/edit-server/can-deactivate-guard.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent, 
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServersService,AuthService,AuthGuard,ServerResolver,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
