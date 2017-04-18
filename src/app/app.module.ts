import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AlbumModuleDescriptionComponent } from './portfolio/project-descriptions/album-module-description/album-module-description.component';
import { AngularCarouselDescriptionComponent } from './portfolio/project-descriptions/angular-carousel-description/angular-carousel-description.component';
import { ProductListingDescriptionComponent } from './portfolio/project-descriptions/product-listing-description/product-listing-description.component';
import { AlbumModuleComponent } from './portfolio/projects/album-module/album-module.component';
import { AngularCarouselComponent } from './portfolio/projects/angular-carousel/angular-carousel.component';
import { ProductListingComponent } from './portfolio/projects/product-listing/product-listing.component';
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { AboutJumbotronComponent } from './about/about-jumbotron/about-jumbotron.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [

  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {path: '**', component: PortfolioComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    AboutComponent,
    AlbumModuleDescriptionComponent,
    AngularCarouselDescriptionComponent,
    ProductListingDescriptionComponent,
    AlbumModuleComponent,
    AngularCarouselComponent,
    ProductListingComponent,
    AboutInfoComponent,
    AboutJumbotronComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
