import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatsComponent } from './pages/content/candidats/candidats.component';
import { DiplomesComponent } from './pages/content/diplomes/diplomes.component';
import { HomeComponent } from './pages/content/home/home.component';
import { OffreDetailComponent } from './pages/content/offres/offre-detail/offre-detail.component';
import { OffresComponent } from './pages/content/offres/offres.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diplomes', component: DiplomesComponent },
  { path: 'offres', component: OffresComponent },  
  { path: 'candidats', component: CandidatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
