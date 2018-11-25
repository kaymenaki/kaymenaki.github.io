var latitude,
    longitude,
    apiUrl;

// get today
function getDate() {
   var months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
       today = new Date(),
       day = today.getDate(),
       month = months[today.getMonth()];

   $(".day").append(day);
   $(".month").append(month);
}
getDate();

// get location
function geoFindMe() {
 if (!navigator.geolocation){
    alert("<p>Geolocation is not supported by your browser</p>");
    return;
  }

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    
    apiUrl = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=f52ed6a48b9fa245ba84383d4368c82c";
     getWeather();
  };

  function error(err) {
     apiUrl = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=London&appid=f52ed6a48b9fa245ba84383d4368c82c";
     getWeather();
     console.log(err.message);
  };
   
  navigator.geolocation.getCurrentPosition(success, error);
}
geoFindMe();

// get the weather
function getWeather() {
   //$(".loading").show();
   // clear weather
   $(".widget .data").html("").append("<div class='loading'></div>");
   $("#wrapper").removeClass();
   // make request
   $.ajax({   
     url: apiUrl
   })
   .success(function(data) {
      var overview = data.weather[0].main,
          overviewSpecific = data.weather[0].description,
          tempData = data.main.temp - 273.15,
          temp = Math.round(tempData),
          windSpeed = data.wind.speed,
          windDirection = data.wind.deg,
          icon = data.weather[0].icon,
          location = data.name,
          humidity = data.main.humidity,
          country = data.sys.country;
      
      // hide loader
      $(".loading").remove(); 
      // populate weather
      $("#wrapper").addClass(overview);
      $(".detailed-overview").append(overviewSpecific);
      $(".icon").append("<img src='https://openweathermap.org/img/w/" + icon + ".png' />");
      $(".temp").append(temp + "&deg;");
      $(".wind-speed").append(windSpeed + " <span class='key'>(mph)</span>");
      $(".wind-direction").css("transform", "rotate(" + windDirection + "deg)");
      $(".humidity").append(humidity);
      $(".location").append(location + ", " + country);
   })
   .error(function(data) {
      debugger;
      console.log(data.responseText);
   });
}
$("#search").on("keyup", function(event) {
   if(event.keyCode == 13){
        var city = $("#search").val();
         apiUrl = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f52ed6a48b9fa245ba84383d4368c82c";
         getWeather();
    }
});
$(".usecurrentlocation").on("click", function() {
   geoFindMe();
   $("#search").val("");
});