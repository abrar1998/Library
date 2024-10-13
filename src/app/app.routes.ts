import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { GalleryComponent } from './Components/gallery/gallery.component';

export const routes: Routes = [
    { path: '', redirectTo:'/Home', pathMatch:'full' },
    {path:'Home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'gallery', component:GalleryComponent}


];
