import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VineListPage } from './vine-list';

@NgModule({
  declarations: [
    VineListPage,
  ],
  imports: [
    IonicPageModule.forChild(VineListPage),
  ],
  exports: [
    VineListPage
  ]
})
export class VineListPageModule {}
