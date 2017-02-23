(() => {
  angular.module('Poll', ['PollService'])
    .controller('PollController', ['PollService', '$routeParams', PollController]);

  function PollController(PollService, $routeParams) {
    var vm = this;
    vm.perc_sim;
    vm.perc_nao;
    vm.perc_ns;
    vm.poll;
    vm.map;

    PollService
      .getPoll($routeParams.id)
      .then(res => {

        let quant_sim = 0;
        let quant_nao = 0;
        let quant_ns = 0;

        vm.poll = res.data;

        res.data.forEach((element, index) => {
          if(element.resposta === "S") {
            vm.poll[index].icon = 'assets/img/icon-verde.png'
            quant_sim++;
          } else if(element.resposta === "N") {
            vm.poll[index].icon = 'assets/img/icon-vermelho.png'
            quant_nao++;
          } else {
            vm.poll[index].icon = 'assets/img/icon-amarelo.png'
            quant_ns++;
          }
        });

        vm.perc_sim = (quant_sim * 100) / res.data.length;
        vm.perc_nao = (quant_nao * 100) / res.data.length;
        vm.perc_ns = (quant_ns * 100) / res.data.length;

        console.log(vm.poll);

        var myLatlng = new google.maps.LatLng(-6.889797, -38.561197);
        vm.mapOptions = {
          zoom: 5,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        setMarkers(vm.poll);

        console.log(res.data);
      }, (err) => {
        console.log('Err:', err);
      })

      function setMarkers(poll) {
        vm.map = new google.maps.Map(document.getElementById("mapa_poll"), vm.mapOptions);

        poll.forEach(element => {
          let latLng = new google.maps.LatLng(element.st_asewkt.latitude, element.st_asewkt.longitude);
          let marker = new google.maps.Marker({
            position: latLng,
            map: vm.map,
            icon: element.icon
          })
        })

      }

      vm.filtrar = (datas) => {
        console.log(datas);
        let all;
        if(datas.resposta == 'nda'){
          all = vm.poll.filter(element => {
            return element.escolaridade == datas.escolaridade;
          });
        } else if (datas.escolaridade == 'nda'){
          all = vm.poll.filter(element => {
            return element.resposta == datas.resposta;
          });
        } else {
          all = vm.poll.filter(element => {
            return element.resposta == datas.resposta && element.escolaridade == datas.escolaridade;
          });
        }

        setMarkers(all);
      }

      vm.back = () => {
        window.location.href = '#!/home';
      }

  }
})();
