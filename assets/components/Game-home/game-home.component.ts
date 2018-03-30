import {Component} from '@angular/core';
import {Definations} from '../../definations/def';

const definations = new Definations;

@Component({
    selector: 'component-game-home',
    templateUrl: './game-home.html',
    styleUrls: ['../../../public/stylesheets/game-home.css']
})

export class GameHomeComponent {

    constructor(){
        console.log(definations.PIECES);
    }

}