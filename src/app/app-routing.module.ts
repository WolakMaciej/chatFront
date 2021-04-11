import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MessageComponent} from './message/message.component';
import {AuthGuard} from './auth.guard';
import {ChannelComponent} from './message/channel/channel.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'message', component: MessageComponent, canActivate: [AuthGuard], children: [
      {path: '', component: ChannelComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})

export class AppRoutingModule { }
