import {Definations} from './def';

var def = new Definations

export class BasicFunctions {

    FRToSq(f: number, r: number) : number {
        return (21 + f + (10*r));
    }

    InitFilesRanksBrd() {
        let file = def.FILES.FILE_A;
        let rank = def.RANKS.RANK_1;
        let sq = def.SQUARES.A1;

        for(let index = 0; index< def.BRD_SQ_NUM; index++) {
            def.FilesBrd[index] = def.SQUARES.OFFBOARD;
            def.RanksBrd[index] = def.SQUARES.OFFBOARD;
        }

        for(rank = def.RANKS.RANK_1; rank <= def.RANKS.RANK_8; rank++) {
            for(file = def.FILES.FILE_A; file <= def.FILES.FILE_H; file++) {
                sq = this.FRToSq(file, rank);
                def.FilesBrd[sq] = file;
                def.RanksBrd[sq] = rank;
            }
        }
        
        return def;
    }
}