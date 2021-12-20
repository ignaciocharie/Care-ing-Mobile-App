import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BathPage } from './bath.page';

const routes: Routes = [
  {
    path: '',
    component: BathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BathPageRoutingModule {}
