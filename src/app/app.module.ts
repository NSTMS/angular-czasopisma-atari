import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { YearbooksComponent } from './yearbooks/yearbooks.component';
import { GlobalServiceService } from './global-service.service';
import { HttpClient } from '@angular/common/http';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    routingComponents,
    YearbooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GlobalServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
