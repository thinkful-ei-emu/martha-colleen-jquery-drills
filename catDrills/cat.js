'use strict';

function clickedThumbnail(){
  $('.thumbnail').on('click', event => {
    let selectedCatSrc = $(event.currentTarget).find('img').attr("src")

    $('.hero img').attr('src', selectedCatSrc);
  });
}

$(clickedThumbnail);