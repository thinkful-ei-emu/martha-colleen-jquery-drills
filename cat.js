'use strict';

function clickedThumbnail(){
  $('.thumbnail').on('click', e => {
    //selected cat
    const selectedCat = $(e.currentTarget);
    //other cats
    const otherCats = $('.thunmbnail').not(selectedCat);

    //make function work
    otherCats.removeClass('.hero');

    selectedCat.toggleClass('.hero');
  });
}

$(clickedThumbnail);