let response = {
    "location": {
      "name": "Guntur",
      "region": "Andhra Pradesh",
      "country": "India",
      "lat": 16.3,
      "lon": 80.45,
      "tz_id": "Asia/Kolkata",
      "localtime_epoch": 1726629612,
      "localtime": "2024-09-18 08:50"
    },
    "current": {
      "last_updated_epoch": 1726629300,
      "last_updated": "2024-09-18 08:45",
      "temp_c": 32,
      "temp_f": 89.6,
      "is_day": 1,
      "condition": {
        "text": "Sunny",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
        "code": 1000
      },
      "wind_mph": 8.7,
      "wind_kph": 14,
      "wind_degree": 305,
      "wind_dir": "NW",
      "pressure_mb": 1005,
      "pressure_in": 29.68,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 67,
      "cloud": 0,
      "feelslike_c": 39,
      "feelslike_f": 102.1,
      "windchill_c": 28.1,
      "windchill_f": 82.6,
      "heatindex_c": 30.7,
      "heatindex_f": 87.2,
      "dewpoint_c": 21.3,
      "dewpoint_f": 70.3,
      "vis_km": 6,
      "vis_miles": 3,
      "uv": 7,
      "gust_mph": 11.2,
      "gust_kph": 18
    }
  }


  console.log(response["current"]["temp_c"])
  console.log(response["current"]["temp_f"])
  console.log(response["current"]["condition"]["text"])