import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ActionsPesosComponent } from './actions-pesos/actions-pesos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, ActionsPesosComponent],

  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
