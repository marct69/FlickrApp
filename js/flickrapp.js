



$(document).ready(function() {  // premiere ligne de jQuery

  // To save data with sessionStorage => create table
  var tags = [];


  // Ajout d'un nouveau boutton dans le navigateur

  $(".input-field button").on("click", function() {
    //Create the new tab
    var newTabName = $("#search").val()
    var newTab = '<a class="tab" id="' + newTabName + '"><button class="waves-effect waves-light btn newbutton">' + newTabName + '</button></a>'
    $(newTab).insertAfter("#css")

    //Create the new Tag
    var newTag = '<div class="chip">' + newTabName + '<b class="close material-icons">x</b></div>'
    $(newTag).insertAfter("#tag")

    //Send new tag to the table
    tags.push(newTabName);

    // Save data to sessionStorage au sein du tableau tags => quand je vais reloader la page, mes tags seront toujours dans le storage
      sessionStorage.tags = JSON.stringify(tags);
      console.log(sessionStorage)

      console.log(JSON.parse(sessionStorage))




  })


      console.log(sessionStorage)






// Click sur bouton dans le navigateur

    $(document).on("click", ".tabs button", function() {
    $("button").removeClass("active");
    $(this).addClass("active");
    console.log($(this).text());


    // Ajax
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var photoSelection = $(this).text();
    var flickrOptions = {
    			tags: photoSelection,
    			format: "json",
    		};
        function displayPhotos(data){

          // Règle le nombre d'objets à afficher en fonction de la valeur choisie par l'utilisateur sur la slide bar
          data.items.length = $("#test5").val();

          console.log(data.items.length);
          console.log(data.items[1].media.m)



        			var photoHTML = '<ul>'



        			$.each( data.items, function(i){


        				photoHTML += '<li class="col s3">';
        				photoHTML += '<a href="' +  data.items[i].link + '" class="image">';
        				photoHTML += '<img src="' + data.items[i].media.m + '"></a></li>'
        			});
        photoHTML += '</ul>';

        $('#photos').html(photoHTML);
        		}

  		$.getJSON(flickrAPI, flickrOptions, displayPhotos);


      // Bouton "voir plus" permettant de voir plus de photos que celles sélectionnées

      $("#voirplus").click(function(){

            // Ajax
            var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            var photoSelection = $("button.active").text();
            var flickrOptions = {
            			tags: photoSelection,
            			format: "json",
            		};
                function displayPhotos(data){

                  // Règle le nombre d'objets à afficher en fonction de la valeur choisie par l'utilisateur sur la slide bar
                  data.items.length = parseInt($("#test5").val()+5);


                			var photoHTML = '<ul>'



                			$("button.active").each( data.items, function(i){


                				photoHTML += '<li class="col s3">';
                				photoHTML += '<a href="' +  data.items[i].link + '" class="image">';
                				photoHTML += '<img src="' + data.items[i].media.m + '"></a></li>'
                			});
                photoHTML += '</ul>';

                $('#photos').html(photoHTML);
                		}

          		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

      })



    // change en live le nombre d'images à afficher quand on choisi une nouvelle valeur avec la sidebar


    $("#test5").change(function() {
      ($("button.active")).click();
    })


  })








    }); // fermeture de jQuery
