import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryElementComponent } from './library-element/library-element.component';
import { SpecialComponent } from './special/special.component';
import { YearbooksComponent } from './yearbooks/yearbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
const routes: Routes = [
  {path: 'biblioteka', component:SpecialComponent},
  {path: 'biblioteka/:id', component:LibraryElementComponent},
  {path: 'biblioteka/:id/:rok', component:YearbooksComponent},
  {path: 'biblioteka/:id/:rok/:numer', component:BookComponent},
  {path:"**", redirectTo:"biblioteka"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [SpecialComponent,LibraryElementComponent,YearbooksComponent,BookComponent] 