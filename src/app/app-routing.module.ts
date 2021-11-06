import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'jobs', component:JobsComponent},
  {path:'', component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
