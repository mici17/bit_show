
import * as ui from './ui.js';
import * as data from './data.js';

function onShowClick(showId) {
    data.fetchSingleShow(showId)
        .then(show => {
            ui.renderSingleShow(show);
        });
}

function loadShows() {
    data.fetchShows()
        .then(shows => {
            ui.renderShows(shows, onShowClick);
        });
}

function setUpEventListener() {
    $("#search-show").keypress(event => {
        if (event.keyCode !== 13) {
            return;
        }
        const searchData = ui.collectSearchData();

        data.fetchSearchShow(searchData)
            .then(searchShows => {
                ui.displaySearchedShows(searchShows, onShowClick);
            })
    });
}

function init() {
    loadShows();
    setUpEventListener();
}

export {
    init
}
