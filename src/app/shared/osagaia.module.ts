import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { Router, RouterModule } from '@angular/router';
import { ExploreContainerComponent } from './explore-container/explore-container.component';



@NgModule({
  declarations: [HeaderTabComponent, ExploreContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],

  exports:[
    HeaderTabComponent,ExploreContainerComponent
  ]

})
export class OsagaiaModule { }
