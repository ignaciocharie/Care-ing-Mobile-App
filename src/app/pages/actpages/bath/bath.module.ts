import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BathPageRoutingModule } from './bath-routing.module';

import { BathPage } from './bath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BathPageRoutingModule
  ],
  declarations: [BathPage]
})
export class BathPageModule {}
