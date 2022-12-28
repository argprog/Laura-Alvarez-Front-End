import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './modales/login/login.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'', component:IndexComponent, canActivate:[GuardGuard]},
  {path:'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
