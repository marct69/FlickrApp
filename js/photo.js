

$(document).ready(function() {  // premiere ligne de jQuery

  $.getJSON("http://jsonplaceholder.typicode.com/photos") // récupère en format json l'url
    .done(function(datas) {
    console.log(datas);
  })







  }); // fermeture de jQuery
