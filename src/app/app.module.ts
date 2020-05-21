import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { DasboardPanelComponent } from './dasboard-panel/dasboard-panel.component';
import { TableMainComponent } from './table-main/table-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    ActionPanelComponent,
    BottomPanelComponent,
    DasboardPanelComponent,
    TableMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
