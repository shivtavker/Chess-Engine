import {Component} from '@angular/core';
import {Definations} from '../../definations/def';
import {BasicFunctions} from '../../definations/basicfunction';

var def = new Definations;

var basicFunction = new BasicFunctions;

@Component({
    selector: 'component-game-home',
    templateUrl: './game-home.html',
    styleUrls: ['../../../public/stylesheets/game-home.css']
})

export class GameHomeComponent {

    constructor(){
        def = basicFunction.InitFilesRanksBrd();
        console.log(def.RanksBrd[basicFunction.FRToSq(def.FILES.FILE_C, def.RANKS.RANK_5)]);
    }

}