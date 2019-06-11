

  //    Tabs

      $( function() {
        $( "#tablaa" ).tabs();
      } );
      $( function() {
        $( "#tabs" ).tabs();
      } );
      $( function() {
        $( "#promos" ).tabs();
      } );
      $( function() {
        $( "#paquetes" ).tabs();
      } );
      $( function() {
        $( "#menus" ).tabs();
      } );
  
 //     Carousel     
      $("#lobby").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
        $("#owl-promo-galaxer").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
         $("#owl-promo-graduacion").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });

        $("#galaxer").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
        // $("#gameroom").owlCarousel({
        //   items : 1,
        //   slideSpeed : 300,
        //   paginationSpeed : 400,
        //   autoPlay: 5000,
        //   singleItem: true
        // });
        $("#minigiochi").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
        $("#blasterzone").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
        $("#girlsfashion").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
        $("#juegos").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
        $("#karaoke").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
          $("#menu-niños").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });

        $("#menu-adultos").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });
        $("#menu-especial").owlCarousel({
          items : 1,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoPlay: 5000,
          singleItem: true
        });


   //tabs
          function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }
      
      