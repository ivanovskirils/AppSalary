import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperSalaryComponent } from './developer-salary/developer-salary.component';

const routes: Routes = [
  { path: 'salaryapp', component: DeveloperSalaryComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
