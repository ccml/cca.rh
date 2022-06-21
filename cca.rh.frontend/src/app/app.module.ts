import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { MenuComponent } from './pages/layout/menu/menu.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { DiplomesComponent } from './pages/content/diplomes/diplomes.component';
import { OffresComponent } from './pages/content/offres/offres.component';
import { CandidatsComponent } from './pages/content/candidats/candidats.component';
import { HomeComponent } from './pages/content/home/home.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DiplomesComponent,
    OffresComponent,
    CandidatsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}