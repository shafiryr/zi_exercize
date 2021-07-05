import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthenticationGuardService} from './core/guards/authentication-guard.service';
import {PagesComponent} from "./pages/pages.component";
import {MembersComponent} from './pages/members/members.component';
import {MemberInfoComponent} from './pages/members/member-info/member-info.component';


const routes: Routes = [
  {
    path: 'app',
    component: PagesComponent,
    canActivate: [AuthenticationGuardService],
    children: [
      {
        path: 'members',
        component: MembersComponent,
        canActivate: [AuthenticationGuardService]
      },
      {
        path: 'member/:id',
        component: MemberInfoComponent,
        canActivate: [AuthenticationGuardService]
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app/members'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
