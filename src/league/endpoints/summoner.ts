import { RiotApi, global, league } from '../../constants'
import { RegionId } from '../metadata'
import { SummonerInfo } from '../..';

export class SummonerAPI {

    constructor() {

    }

    /**
     * GetByName
     */
    public GetByName(Region : RegionId, Name : String) {
        
        return new Promise((resolve, reject) => {
            RiotApi(`https://${Region}.${global.basepath}${league.summoner}/by-name/${Name}`)
                .then(request => resolve(request.data as SummonerInfo))
                .catch(error => reject({
                    statusCode: error.response.data.status['status_code'],
                    message: error.response.data.status.message
                }));
        });
    }
}