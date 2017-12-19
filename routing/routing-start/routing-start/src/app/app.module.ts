import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { Routes,RouterModule } from '@angular/router';

const appRouter : Routes=[
{path:'', component: HomeComponent},
{path:'users', component :UsersComponent},
{path:'users/:id/:name', component:UserComponent}
{path:'servers', component :ServerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
