import { Show } from './entities/show.js';
import { ShowSingle } from './entities/show-single.js';
import { SearchedShow } from './entities/search-show.js';

function fetchShows() {
    let requestUrl = "http://api.tvmaze.com/shows";

    return fetch(requestUrl)
        // console.log(fetch(requestUrl));
        .then(response => response.json())
        .then((showsArray) => {
            let shows = showsArray.map(showObj => new Show(showObj));

            shows.sort((showA, showB) => showB.rating - showA.rating);

            return (shows.slice(0, 50));
        })

    // $.get(requestUrl, function (data) {
    //     let shows = data.map(function (showObj) {
    //         return new Show(showObj);
    //     });

    //     shows.sort(function (showA, showB) { return showB.rating - showA.rating });

    //     callback(shows.slice(0, 50));
    // })
}

function fetchSingleShow(showId) {
    let requestShowUrl = `http://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast&embed[]=akas&embed[]=crew&embed[]=episodes`;

    return fetch(requestShowUrl)
        .then(response => response.json())
        .then(data => {
            let showSingle = new ShowSingle(data);
            return showSingle;
        });

    // $.get(requestShowUrl, function (data) {
    //     // console.log(data);
    //     let showSingle = new ShowSingle(data);
    //     callbackSingle(showSingle);
    // });
}

function fetchSearchShow(collectedData) {
    let searchRequest = `http://api.tvmaze.com/search/shows?q=${collectedData}`;

    return fetch(searchRequest)
        .then(response => response.json())
        .then(data => {
            let searchShows = data.map(searchShowObj => new SearchedShow(searchShowObj));

            return searchShows;
        })
    // $.get(searchRequest, function (data) {

    //     let searchShows = data.map(function (searchShowObj) {
    //         return new SearchedShow(searchShowObj);
    //     })
    //     // console.log(searchShows);
    //     callbackSearch(searchShows);
    // });
}

export {
    fetchShows,
    fetchSingleShow,
    fetchSearchShow
}
