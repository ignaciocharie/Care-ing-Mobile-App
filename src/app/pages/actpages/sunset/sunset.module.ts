import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SunsetPageRoutingModule } from './sunset-routing.module';

import { SunsetPage } from './sunset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SunsetPageRoutingModule
  ],
  declarations: [SunsetPage]
})
export class SunsetPageModule {}
