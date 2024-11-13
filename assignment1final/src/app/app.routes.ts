import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';

export const routes: Routes = [{path:'',component:HomeComponent},
                            {path:'home',component:HomeComponent},
                            {path:'testimonials',component:TestimonalsComponent}
                        ];
