import { SummonerAPI } from "./endpoints/summoner"
import * as Metadata from "./metadata"

export class League {

    public Summoner : SummonerAPI
    public Metadata = Metadata;

    constructor() {
        
        this.Summoner = new SummonerAPI();
    }
}