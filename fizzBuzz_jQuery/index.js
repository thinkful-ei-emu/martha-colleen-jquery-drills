'use strict';
/**
* @param {number} num
* @returns {*}
*/

function fizzbuzz(num){
  if (num % 15 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0){
    return 'buzz';
  } else if (num % 3 === 0){
    return 'fizz';
  } else {
    return num;
  }
}
/**
 * Build HTML for fizzbuzz output
 * @param {*} fizzResult
 * generate ONE fizzbuzz item
 * @returns {string}
 */

function generateFizzHtml(fizzResult){
  let fizzClass = '';
  if (typeof fizzResult === 'string'){
    fizzClass = fizzResult;
  }
  console.log(fizzResult);
  

  return `
  <div class='fizz-buzz-item ${fizzClass}'>
  <span>${fizzResult}</span>
  </div>`;
  
}

/**
* handle form submission
*/
function handleSubmit(){
  $('#number-chooser').submit(event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    //clear input value after form submit
    $('#number-choice').val('');
    //array for capturing results
    const fizzBuzzResult = [];
    for (let i = 1; i <= countTo; i++){
      fizzBuzzResult.push(fizzbuzz(i));
    }
     
    const html = fizzBuzzResult.map( item => generateFizzHtml(item));
    console.log(html);
    $('.js-results').html(html);
 
  });
}

$(handleSubmit);