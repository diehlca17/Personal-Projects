
// Set global variables and defaults
var city = "New York";
var defaultCity = "Choose a City";
var temp;
var weather;
var icon;

// changeCity function changes city name header in weight container
    function changeCity(){
        var x = document.getElementById("city").value;
        
        if(document.getElementById("city").value == "New York"){
            city = "New York";
            document.getElementById("cityName").innerHTML = x;
        }
        else if(document.getElementById("city").value == "Raleigh"){
              city = "Raleigh";
              document.getElementById("cityName").innerHTML = x;
            } 
          else if(document.getElementById("city").value == "Tampa"){
                city = "Tampa";
                document.getElementById("cityName").innerHTML = x;
            }
            else if(document.getElementById("city").value == "Charleston"){
                    city = "Charleston";
                    document.getElementById("cityName").innerHTML = x;
                }
                else if(document.getElementById("city").value == "Baltimore"){
                        city = "Baltimore";
                        document.getElementById("cityName").innerHTML = x;
                    }
                    else if(document.getElementById("city").value == "Washington"){
                            city = "Washington";
                            document.getElementById("cityName").innerHTML = x;
                        }
                            else if(document.getElementById("city").value == "Los Angeles"){
                                city = "Los Angeles";
                                document.getElementById("cityName").innerHTML = x;
                            }
                                else if(document.getElementById("city").value == "Houston"){
                                    city = "Houston";
                                    document.getElementById("cityName").innerHTML = x;
                                }
                                    else if(document.getElementById("city").value == "Phoenix"){
                                        city = "Phoenix";
                                        document.getElementById("cityName").innerHTML = x;
                                    }
                                        else if(document.getElementById("city").value == "Denver"){
                                            city = "Denver";
                                            document.getElementById("cityName").innerHTML = x;
                                        }
                                            else if(document.getElementById("city").value == "Hartford"){
                                                city = "Hartford";
                                                document.getElementById("cityName").innerHTML = x;
                                            }
                                                else if(document.getElementById("city").value == "Harrisburg"){
                                                    city = "Harrisburg";
                                                    document.getElementById("cityName").innerHTML = x;
                                                }
                                                    else if(document.getElementById("city").value == "Columbia"){
                                                        city = "Columbia";
                                                        document.getElementById("cityName").innerHTML = x;
                                                    }
                                                        else if(document.getElementById("city").value == "Salt Lake City"){
                                                            city = "Salt Lake City";
                                                            document.getElementById("cityName").innerHTML = x;
                                                        }
                                                            else if(document.getElementById("city").value == "Olympia"){
                                                                city = "Olympia";
                                                                document.getElementById("cityName").innerHTML = x;
                                                            }
                                                            else if(document.getElementById("city").value == "Augusta"){
                                                                city = "Augusta";
                                                                document.getElementById("cityName").innerHTML = x;
                                                            }
                                                                
    }

      
// setWeather() function sets the weather according to weathermap API
    function setWeather(){

        
        
        // Use ajax to grab json data with synchronous rendering, opposed to using $getJson asynchronous rendering
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&&appid=45e862084b027d2e6cf8c35dbbea4aab",
            async: false,
            dataType: 'json',
            success: function(data) {
                console.log(data);

            
            // grabs data from json and sets variables
            icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            temp = Math.floor(data.main.temp);
            weather = data.weather[0].main;

            // logs json data to console
            console.log(icon);
            $('.icon').attr('src',icon);
            $('.weather').append(weather);
            $('.temp').append(temp);

            // sets temp and weather variables to be accessible by id
            document.getElementById('tempID').innerHTML = temp;
            document.getElementById('weatherID').innerHTML = weather;

        }
    });

    }


