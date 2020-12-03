export class Summoner {

    public accountId: string
    public id: string
    public name: string
    public profileIconId: number
    public puuid: string
    public revisionDate: number
    public summonerLevel: number
    public nReported: number

    constructor(accountId: string, id: string, name: string, profileIconId: number, puuid: string, revisionDate: number, summonerLevel: number, nReported: number){

        this.accountId = accountId
        this.id = id
        this.name = name
        this.profileIconId = profileIconId
        this.puuid = puuid
        this.revisionDate = revisionDate
        this.summonerLevel = summonerLevel
        this.nReported = nReported


    }
}
