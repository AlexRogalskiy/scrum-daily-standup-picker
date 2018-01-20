import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from 'app/settings/settings.component';
import { SettingsService } from 'app/settings/settings.service';
import { AppComponent } from './app.component';
import { ExternalPageComponent } from './external-page/external-page.component';
import { SafePipe } from './safe-url.pipe';
import { SideNavComponent } from './sidenav/sidenav.component';
import { StandupPickerComponent } from './standup-picker/standup-picker.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/standup-picker',
    pathMatch: 'full'
  },
  { path: 'standup-picker', component: StandupPickerComponent },
  { path: 'agile-board', component: ExternalPageComponent },
  { path: 'slideshow', component: ExternalPageComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    StandupPickerComponent,
    ExternalPageComponent,
    SettingsComponent,
    SafePipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
