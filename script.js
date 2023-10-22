$(document).ready(function () {
     //store the URL for the API with my API key
     var baseURL = "https://api.openweathermap.org/data/2.5/weather?" + mykey; 
     var mykey = config.MY_KEY;
     
     
   



     // add click function & logic for AJAX request here
     $("#search").click(function(){
        var location = $("#location").val();
        var URL =  `${baseURL}q=${location}&APPID=${mykey}`;
        $.ajax({
            url: URL,
            method:"GET",
            success:function(data){
                var weather = data;
                // Convert temperature from Kelvin to Fahrenheit
                var temperatureFahrenheit = (weather.main.temp - 273.15) * 9/5 + 32;
                var weatherConditions = "<p>" + "Temperature: " + Math.floor(temperatureFahrenheit) +"°F";
                weatherConditions += "<p>" +"Weather: " + weather.weather["0"].description + "</p>";
                weatherConditions += "<p>" + "Humidity: " + weather.main.humidity + "%" + "</p>";
                weatherConditions += "<p>" + "Wind Speed: "+ weather.wind.speed +"m/s" +"</p>";

                $("#weather-info").html(weatherConditions);

                



            },//error message for network error and location not found.
            error: function(jqXHR){
                if (jqXHR.status === 404){
                    $("#weather-info").html("Location not found. Please enter a valid location. ");

                }else {
                    $("#weather-info").html("Network error. Please try again later. ");
                }
            }




            });


     });

});