import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// **** ACRESCENTE A LINHA ABAIXO *** 
import { MaterialModule } from './material/material.module';
@NgModule({
    declarations: [AppComponent],
    imports: [
       BrowserModule,
       BrowserAnimationsModule,
       // **** ACRESCENTE A LINHA ABAIXO E UMA VÍRGULA NA LINHA DE CIMA *** 
       MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
 })
 export class AppModule { }