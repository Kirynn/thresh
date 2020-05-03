import * as constants from './constants';
import { League } from './league/league';

export class Thresh {

    public League : League;

    constructor(RiotAPIKey : string) {

        this.League = new League();
        constants.RiotApi.defaults.headers['X-Riot-Token'] = RiotAPIKey;
    }
}