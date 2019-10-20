class ShowSingle {
    constructor(singleShowObj) {
        this.name = singleShowObj.name;
        this.id = singleShowObj.id;
        this.summary = singleShowObj.summary;
        this.photo = singleShowObj.image.original;
        this.allSeasons = singleShowObj._embedded.seasons;
        this.allCast = singleShowObj._embedded.cast;
        this.akas = singleShowObj._embedded.akas;
        this.crew = singleShowObj._embedded.crew;
        this.listOfEpisodes = singleShowObj._embedded.episodes;
    }
}

export { ShowSingle } 