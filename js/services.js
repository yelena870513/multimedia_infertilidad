angular.module('starter.services', [])

.factory('Provider', function($http) {
  
  var lang = "es";
  return {    

    getLang: function(){
      return lang;
    },

    setLang: function(value){
      lang = value;
    }
    
  };

});

angular.module('starter.services').factory('Items',function ($http, $q) {
  var items = {};
  items.fetch=function () {
    var d = $q.defer();
    $http.get('./json/data.json').success(function(data) {
      // $scope.items = data.data;
      d.resolve(data.data);
    }).error(function(data) {
      d.reject("No data found");
    });
     return d.promise;
  };
  
  return items;
});