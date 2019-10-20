
function renderShows(shows, onShowClick) {
    shows.forEach(show => {
        $("#shows-list")
            .append($("<div class='inner-show col-md-4'></div>")
                .html(`
                    <a href ='#'>
                        <div class='show-card' data-show-id='${show.id}'>
                            <img src='${show.photo}'>
                            <p>${show.name}</p>
                        </div>
                    </a>`
                )
            );
    });

    $('.show-card').on('click', function () {
        let showId = this.getAttribute('data-show-id');
        onShowClick(showId);
    });
}

function showDatesOfSeason(show) {
    let ulHolder = $(`<div></div>`);
    let ulElem = $(`<ul class="season-dates"></ul>`);

    show.allSeasons.forEach(season => {
        // console.log($(ulElem));
        ulElem.append(`<li> ${season.premiereDate} - ${season.endDate} </li>`);
    });
    // console.log(ulElem.html());
    $(ulHolder).append($(ulElem));

    return ulHolder.html();
}


function showCast(show) {
    let ulHolder = $(`<div></div>`);
    let ulElem = $(`<ul class="cast-names"></ul>`);

    show.allCast.forEach(cast => {
        // console.log(cast);
        $(ulElem).append(`<li> ${cast.person.name}</li>`);
    });
    $(ulHolder).append($(ulElem));
    return ulHolder.html();
}

function showAkas(show) {
    let ulHolder = $(`<div></div>`);
    let ulElem = $(`<ul class="akas-names"></ul>`);

    show.akas.forEach(aka => {
        if (aka.country !== null) {
            $(ulElem).append(`<li> ${aka.name}, ${aka.country.name} </li>`);
        } else {
            $(ulElem).append(`<li> ${aka.name}, / </li>`);
        }
    });
    $(ulHolder).append($(ulElem));
    return ulHolder.html();
}

function showEpisodes(show) {
    let ulHolder = $(`<div></div>`);
    let ulElem = $(`<ul class="show-episodes"></ul>`);

    show.listOfEpisodes.forEach(episode => {
        $(ulElem).append(`<li class="col-md-4">
        <a href="${episode.url}" target="_blank">
            <div class="episode-holder"> 
                <h5>S${episode.season}E${episode.number}</h5>
                <div class="episode-image"><img src="${episode.image.medium}"></div>
                <h5>${episode.name}</h5>
                ${episode.summary}
            </div>
        </a>
        </li>`);
    });
    $(ulHolder).append($(ulElem));
    return ulHolder.html();
}

function showCrew(show) {
    let ulHolder = $(`<div></div>`);
    let ulElem = $(`<ul class="show-crew"></ul>`);

    show.crew.forEach(member => {
        $(ulElem).append(`<li> ${member.person.name}, ${member.type} </li>`);
    });
    $(ulHolder).append($(ulElem));
    return ulHolder.html();
}

function renderSingleShow(show) {
    $('.holder').html('');

    $('.holder').html(`
            <h2 class="single-title">${show.name}</h2>
            <div class="col-md-12 single-holder">
                <div class="col-lg-8 col-sm-12 image-single-holder">
                    <img src= ${show.photo}>
                </div>

                <div class="col-lg-4 col-sm-12 data-single-holder">
                    <h4>Seasons (${show.allSeasons.length})</h4>
                        ${showDatesOfSeason(show)}
                    <h4>Cast</h4>
                    ${showCast(show)}
                </div>

                <div class="additional-data">
                    <h4 class="details-title">Show details</h4>
                    <div class="summary">${show.summary}</div>
                </div>

                <div class="show-list-episodes">
                    <h4>Episodes</h4>
                    <div>${showEpisodes(show)}</div>
                </div>

                <div class="additional-info">
                    <div class="col-md-6 col-12 show-akas">
                        <h4>Show AKAs</h4>
                        <div>${showAkas(show)}</div>
                    </div>
                    
                    <div class="col-md-6 col-12 show-crew-list">
                        <h4>Show Crew</h4>
                        <div>${showCrew(show)}</div>
                    </div>
                </div>
                
            </div>`);
}

function collectSearchData() {
    return $("#search-show").val();
}

function displaySearchedShows(shows, onShowClick) {
    $('.holder').html('');

    $('.holder').append($('<div id="shows-list"></div>'));

    shows.forEach(show => {
        if (show.photo === null) {
            $('img').attr('class', 'broken-image');
            $('img').attr('src', 'https://tinyurl.com/y62v442o');
        } else {

            $("#shows-list")
                .append($("<div class='inner-show col-md-4'></div>")
                    .html(`
                        <a href ='#'>
                            <div class='show-card' data-show-id='${show.id}'>
                                <img src='${show.photo.medium}'>
                                <p>${show.name}</p>
                            </div>
                        </a>`
                    )
                );
        }
    });
    $('.show-card').on('click', function () {
        let showId = this.getAttribute('data-show-id');
        onShowClick(showId);
    });
}

export {
    renderShows,
    renderSingleShow,
    collectSearchData,
    displaySearchedShows
}

