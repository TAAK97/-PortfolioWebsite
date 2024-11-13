import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

import { AppComponent } from './app.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { IncludeTestimonalComponent } from './include-testimonals/include-testimonals.component';

@NgModule({
  declarations: [
    AppComponent,
    TestimonalsComponent,
    IncludeTestimonalComponent // Declare your components here
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule here to use ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
