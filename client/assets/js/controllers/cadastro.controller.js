(() => {
  'use strict';

  angular.module('Cadastro', ['CadastroService'])
    .controller('CadastroController', ['CadastroService', CadastroController]);

  function CadastroController(CadastroService) {
    var vm = this;
    var localizacao;

    navigator.geolocation.getCurrentPosition(position => {
      //Setando ponto no mapa pela geolocalização
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      let element = document.getElementById('mapa_cadastro');

      let map = new google.maps.Map(element, mapOptions);

      let marker = new google.maps.Marker({
        map: map,
        position: latLng
      });

      localizacao = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      console.log('localizacao 1:', localizacao);

      //Geocodificação
      var geocoder = new google.maps.Geocoder();
      document.getElementById('submit').addEventListener('click', function() {
        marker.setMap(null);
        geocodeAddress(geocoder, map);
      });

      function geocodeAddress(geocoder, resultsMap, callbackSuccess) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });

            localizacao = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }

            console.log("localizacao 2:", localizacao);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
    });

    vm.cadastrar = (cadastro) => {
      cadastro.localizacao = localizacao;
      console.log(cadastro);

      CadastroService
        .cadastro(cadastro)
        .then((res) => {
          console.log("Res:", res.data[0]);
          window.location.href = '#!/';
        }, (err) => {
          console.log("Err:", err);
        })

    }


  }
})();
