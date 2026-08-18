import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Outro } from './pages/outro/outro';
import { View } from './pages/view/view';
import { IndividualImg } from './pages/individual-img/individual-img';
import { NewImage } from './pages/new-image/new-image';
import { EditImage } from './pages/edit-image/edit-image';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: Home},
    { path: 'Home', redirectTo: 'home', pathMatch: 'full' },

    { path: 'about', component: About},
    { path: 'About', redirectTo: 'about', pathMatch: 'full' },

    { path: 'view', component: View},
    { path: 'View', redirectTo: 'share', pathMatch: 'full' },

    { path: 'view/:id', component: IndividualImg},
    { path: 'edit/:id', component: EditImage},

    { path: 'newImage', component: NewImage},
    { path: 'NewImage', redirectTo: 'newImage', pathMatch: 'full' },
    { path: 'Newimage', redirectTo: 'newImage', pathMatch: 'full' },
    { path: 'newimage', redirectTo: 'newImage', pathMatch: 'full' },

    { path: 'outro', component: Outro},
    { path: 'Outro', redirectTo: 'outro', pathMatch: 'full' },


];
