import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app.component";
import {GameHomeComponent} from '../components/Game-home/game-home.component';

@NgModule({
    declarations: [
        AppComponent,
        GameHomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}