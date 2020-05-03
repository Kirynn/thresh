import { RegionId } from "./league/metadata";


export interface SummonerInfo {

    accountId: String;
    profileIconId: number;
    name: String;
    id: String;
    puuid: String;
    summonerLevel: Number;
}

export interface MatchByIdQuery {

    region: RegionId
    accountId: String
    champ
}