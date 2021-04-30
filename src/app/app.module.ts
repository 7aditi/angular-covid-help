import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationBarComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, NavigationBarComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
