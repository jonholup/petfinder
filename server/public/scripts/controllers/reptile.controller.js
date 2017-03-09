myApp.controller('ReptileController', ['$http', function($http) {
  console.log('Reptile controller running');

  var self = this;

  self.message = "Welcome to the Reptile View";

var api_key = '7382b07b2c12ec5692deb1df8033fd7f';
var baseURL = 'http://api.petfinder.com/'

  self.getRandomPet = function() {
    // create a URL
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + api_key;
    query += '&animal=reptile';
    query += '&output=basic';
    query += '&format=json';
    console.log('query to api:', query );

    // encode that URL
    var request = encodeURI(query) + '&callback=JSON_CALLBACK';
    // make ajax request
    $http.jsonp(request).then(function(response){
      console.log('response:' , response.data);
      self.pet = response.data.petfinder.pet;
    })
    // when request completed, put info on the DOM
  }

}]);
