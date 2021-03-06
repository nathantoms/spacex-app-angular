// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { HomePageComponent, LaunchDetailPageComponent } from './pages';
import {
  LaunchesListComponent,
  LaunchesListItemComponent,
  LaunchDetailComponent,
  LaunchSuccessIndicatorComponent
} from './components/launches';
import { HeaderComponent,
  ImageGalleryComponent,
  VideoPlayerComponent,
  LoadingSpinnerComponent,
  ImageItemComponent
} from './components/shared';
import { AppComponent } from './app.component';

// Services
import { SpacexApiService } from './services';

// Styles
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      LaunchDetailPageComponent,
      HeaderComponent,
      LaunchesListComponent,
      LaunchesListItemComponent,
      LaunchDetailPageComponent,
      ImageGalleryComponent,
      ImageItemComponent,
      LaunchDetailComponent,
      VideoPlayerComponent,
      LoadingSpinnerComponent,
      LaunchSuccessIndicatorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      AngularFontAwesomeModule
   ],
   providers: [
     SpacexApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
