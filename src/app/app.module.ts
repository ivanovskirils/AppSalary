import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SalaryService } from './salary.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperSalaryComponent } from './developer-salary/developer-salary.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperSalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SalaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
