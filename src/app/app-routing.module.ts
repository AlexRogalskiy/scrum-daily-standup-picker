import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from 'app/components/settings/settings.component';
import { StandupPickerComponent } from './components/standup-picker/standup-picker.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/standup-picker',
    pathMatch: 'full'
  },
  { path: 'standup-picker', component: StandupPickerComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
