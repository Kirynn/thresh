import axios from 'axios'

export const basepath = "api.riotgames.com";

export const global = {

    basepath:"api.riotgames.com"
}

export const league = {
    summoner: "/lol/summoner/v4/summoners",
    match: "/lol/match/v4/matches"
}

export const RiotApi = axios.create({
    method: 'get',
    responseType: 'json',
})
