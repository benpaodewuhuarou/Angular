import {NgModule} from '@angular/core';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth-guard.service';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { ServerResolver } from 'src/app/servers/server/server-resolver.service';
import { CanDeactivateGuard } from 'src/app/servers/edit-server/can-deactivate-guard.service';
const appRoutes: Routes =[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent,children:[
      {path:':id/:name',component:UserComponent}
    ]},
    {path:'servers',canActivateChild:[AuthGuard] ,component:ServersComponent,children:[
      {path:':id',component:ServerComponent,resolve: {server:ServerResolver}},
      {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]},
    ]},
    {path:'not-found',component:ErrorPageComponent,data:{message:'Page not found!'}},
    {path:'**',redirectTo:'/not-found'}
  ]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes,{useHash:true})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}