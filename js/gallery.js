      /*Name this external file gallery.js*/

      function upDate(previewPic){
          //changing text on hover
          document.getElementById('image').innerHTML = previewPic.alt;
           
          // changing  image on hover
          document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
        }
       
           function unDo() {
               // removing background image came by hovering
          document.getElementById('image').style.backgroundImage = "url('')";

           // changing text came by hovering
          document.getElementById('image').innerHTML =  "Hover over an image below to display here."     
        }