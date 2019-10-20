class Show {
    constructor(showObj) {
        this.name = showObj.name;
        this.id = showObj.id;
        this.photo = showObj.image.medium;
        this.rating = showObj.rating.average;
        this.description = showObj.summary;
    }
}

export { Show }