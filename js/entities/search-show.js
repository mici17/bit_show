class SearchedShow {
    constructor(searchShowObj) {
        this.name = searchShowObj.show.name;
        this.id = searchShowObj.show.id;
        this.photo = searchShowObj.show.image;
    }
}

export { SearchedShow }