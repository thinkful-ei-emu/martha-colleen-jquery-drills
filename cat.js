'use strict';

function clickedThumbnail(){
  $('.thumbnail').on('click', e => {
    //selected cat
    const selectedCat = $(event.currentTarget);
    //other cats
    const otherCats = $('thunmbnail').not(selectedCat);

    
  });
}
