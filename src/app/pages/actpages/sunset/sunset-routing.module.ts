import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SunsetPage } from './sunset.page';

const routes: Routes = [
  {
    path: '',
    component: SunsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SunsetPageRoutingModule {}
