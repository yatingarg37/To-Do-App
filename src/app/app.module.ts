import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule, MatButtonModule,MatButtonToggleModule,MatIconModule, MatToolbarModule, MatExpansionModule,MatOptionModule,MatSelectModule, MatSelect} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ListcreatedComponent } from './listcreated/listcreated.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListcreatedComponent,
    ListComponent
  ],
  imports: [
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule, 
    FormsModule,
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
