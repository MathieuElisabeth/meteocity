var input = document.querySelector('input');
var body = document.querySelector('body');
var icon = document.querySelector('.icon-weather');
var temperature = document.querySelector('.weather-temp p');
var temperatureSpan = document.querySelector('.weather-temp p span');
var locationCity = document.querySelector('.location');
var error_message = document.querySelector('.error-message');
var kelvin = 273;
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var city = input.value;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.toLowerCase() + '&appid=125c5200b8f11dd17a867da70395382c&lang=fr')
            .then(function (response) {
            var json = response.json();
            return json;
        })
            .then(function (json) {
            temperature.innerHTML = Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span>";
            locationCity.innerHTML = json.name + ', ' + json.sys.country;
            icon.src = 'assets/icons/black/png/64x64/' + json.weather[0].icon + '.png';
            error_message.innerHTML = '';
            // C° to F°
            var count = 0;
            temperature.addEventListener('click', function () {
                count += 1;
                if (count % 2 !== 0) {
                    temperature.innerHTML = Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span>";
                }
                else {
                    temperature.innerHTML = Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span>";
                }
            });
            //BACKGROUND CHANGE
            if (Math.floor(json.main.temp - kelvin) < 10) {
                body.style.backgroundColor = '#9EDBFE';
            }
            else if (Math.floor(json.main.temp - kelvin) < 20) {
                body.style.backgroundColor = '#E7DC7F';
            }
            else if (Math.floor(json.main.temp - kelvin) >= 20) {
                body.style.backgroundColor = '#E7987F';
            }
        });
    }
});
// // 10 CITIES WEATHER
var paris_background = document.querySelector('#paris-background');
var paris_temp = document.querySelector('#paris');
fetch('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=125c5200b8f11dd17a867da70395382c&lang=fr')
    .then(function (response) {
    var dataParis = response.json();
    return dataParis;
})
    .then(function (dataParis) {
    var paris_icon = 'assets/icons/white/png/64x64/' + dataParis.weather[0].icon + '.png';
    paris_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + paris_icon + "\" alt=\"\"> " + Math.floor(dataParis.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    paris_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            paris_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + paris_icon + "\" alt=\"\"> " + Math.floor((dataParis.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            paris_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + paris_icon + "\" alt=\"\"> " + Math.floor(dataParis.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(dataParis.main.temp - kelvin) < 10) {
        paris_background.src = 'assets/images/paris-hiver.jpg';
    }
    else if (Math.floor(dataParis.main.temp - kelvin) < 20) {
        paris_background.src = 'assets/images/paris-printemps.jpg';
    }
    else if (Math.floor(dataParis.main.temp - kelvin) >= 20) {
        paris_background.src = 'assets/images/paris-ete.jpg';
    }
});
var athens_background = document.querySelector('#athens-background');
var athens_temp = document.querySelector('#athens');
fetch('https://api.openweathermap.org/data/2.5/weather?q=athens&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var dataAthens = response.json();
    return dataAthens;
})
    .then(function (dataAthens) {
    var athens_icon = 'assets/icons/white/png/64x64/' + dataAthens.weather[0].icon + '.png';
    athens_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + athens_icon + "\" alt=\"\"> " + Math.floor(dataAthens.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    athens_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            athens_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + athens_icon + "\" alt=\"\"> " + Math.floor((dataAthens.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            athens_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + athens_icon + "\" alt=\"\"> " + Math.floor(dataAthens.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(dataAthens.main.temp - kelvin) < 10) {
        athens_background.src = 'assets/images/athenes-hiver.jpg';
    }
    else if (Math.floor(dataAthens.main.temp - kelvin) < 20) {
        athens_background.src = 'assets/images/athenes-printemps.jpg';
    }
    else if (Math.floor(dataAthens.main.temp - kelvin) >= 20) {
        athens_background.src = 'assets/images/athenes-ete.jpg';
    }
});
var tokyo_background = document.querySelector('#tokyo-background');
var tokyo_temp = document.querySelector('#tokyo');
fetch('https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var dataTokyo = response.json();
    return dataTokyo;
})
    .then(function (dataTokyo) {
    var tokyo_icon = 'assets/icons/white/png/64x64/' + dataTokyo.weather[0].icon + '.png';
    tokyo_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + tokyo_icon + "\" alt=\"\"> " + Math.floor(dataTokyo.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    tokyo_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            tokyo_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + tokyo_icon + "\" alt=\"\"> " + Math.floor((dataTokyo.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            tokyo_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + tokyo_icon + "\" alt=\"\"> " + Math.floor(dataTokyo.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(dataTokyo.main.temp - kelvin) < 10) {
        tokyo_background.src = 'assets/images/tokyo-hiver.jpg';
    }
    else if (Math.floor(dataTokyo.main.temp - kelvin) < 20) {
        tokyo_background.src = 'assets/images/tokyo-printemps.jpg';
    }
    else if (Math.floor(dataTokyo.main.temp - kelvin) >= 20) {
        tokyo_background.src = 'assets/images/tokyo-ete.jpg';
    }
});
var bogota_background = document.querySelector('#bogota-background');
var bogota_temp = document.querySelector('#bogota');
fetch('https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    var bogota_icon = 'assets/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    bogota_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + bogota_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    bogota_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            bogota_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + bogota_icon + "\" alt=\"\"> " + Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            bogota_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + bogota_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
        bogota_background.src = 'assets/images/bogota-hiver.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) < 20) {
        bogota_background.src = 'assets/images/bogota-printemps.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) >= 20) {
        bogota_background.src = 'assets/images/bogota-ete.jpg';
    }
});
var madrid_background = document.querySelector('#madrid-background');
var madrid_temp = document.querySelector('#madrid');
fetch('https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    var madrid_icon = 'assets/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    madrid_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + madrid_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    madrid_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            madrid_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + madrid_icon + "\" alt=\"\"> " + Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            madrid_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + madrid_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
        madrid_background.src = 'assets/images/madrid-hiver.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) < 20) {
        madrid_background.src = 'assets/images/madrid-printemps.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) >= 20) {
        madrid_background.src = 'assets/images/madrid-ete.jpg';
    }
});
var london_background = document.querySelector('#london-background');
var london_temp = document.querySelector('#london');
fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    var london_icon = 'assets//icons/white/png/64x64/' + json.weather[0].icon + '.png';
    london_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + london_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    london_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            london_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + london_icon + "\" alt=\"\"> " + Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            london_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + london_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
        london_background.src = 'assets/images/londres-hiver.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) < 20) {
        london_background.src = 'assets/images/londres-printemps.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) >= 20) {
        london_background.src = 'assets/images/londres-ete.jpg';
    }
});
var sydney_background = document.querySelector('#sydney-background');
var sydney_temp = document.querySelector('#sydney');
fetch('https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    var sydney_icon = 'assets/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    sydney_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + sydney_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    sydney_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            sydney_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + sydney_icon + "\" alt=\"\"> " + Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            sydney_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + sydney_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
        sydney_background.src = 'assets/images/sydney-hiver.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) < 20) {
        sydney_background.src = 'assets/images/sydney-printemps.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) >= 20) {
        sydney_background.src = 'assets/images/sydney-ete.jpg';
    }
});
var newyork_background = document.querySelector('#newyork-background');
var newyork_temp = document.querySelector('#newyork');
fetch('https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    var newyork_icon = 'assets/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    newyork_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + newyork_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    newyork_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            newyork_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + newyork_icon + "\" alt=\"\"> " + Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            newyork_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + newyork_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //IMAGE CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
        newyork_background.src = 'assets/images/new-york-hiver.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) < 20) {
        newyork_background.src = 'assets/images/new-york-printemps.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) >= 20) {
        newyork_background.src = 'assets/images/new-york-ete.jpg';
    }
});
var seoul_background = document.querySelector('#seoul-background');
var seoul_temp = document.querySelector('#seoul');
fetch('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    var seoul_icon = 'assets/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    seoul_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + seoul_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    seoul_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            seoul_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + seoul_icon + "\" alt=\"\"> " + Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            seoul_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + seoul_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
        seoul_background.src = 'assets/images/seoul-hiver.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) < 20) {
        seoul_background.src = 'assets/images/seoul-printemps.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) >= 20) {
        seoul_background.src = 'assets/images/seoul-ete.jpg';
    }
});
var singapour_background = document.querySelector('#singapour-background');
var singapour_temp = document.querySelector('#singapour');
fetch('https://api.openweathermap.org/data/2.5/weather?q=singapour&appid=125c5200b8f11dd17a867da70395382c')
    .then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    var singapour_icon = 'assets/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    singapour_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + singapour_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
    // C° to F°
    var count = 0;
    singapour_temp.addEventListener('click', function () {
        count += 1;
        if (count % 2 !== 0) {
            singapour_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + singapour_icon + "\" alt=\"\"> " + Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
        }
        else {
            singapour_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + singapour_icon + "\" alt=\"\"> " + Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span> ";
        }
    });
    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
        singapour_background.src = 'assets/images/singapour-hiver.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) < 20) {
        singapour_background.src = 'assets/images/singapour-printemps.jpg';
    }
    else if (Math.floor(json.main.temp - kelvin) >= 20) {
        singapour_background.src = 'assets/images/singapour-ete.jpg';
    }
});