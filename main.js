const API_KEY = 'd9d23c4b33da4fb5bd3121603261702';
const INTERVAL_TIMER = 30000;

const getData = async (location) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.coords.latitude},${location.coords.longitude}`;
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json();
        showData(result);
    }
    catch (err) {
        console.error(err.message)
    }
}

const getLocation = () => {
    if (navigator.geolocation) {
        position = navigator.geolocation.getCurrentPosition(getData, (err)=>{
            console.error(err)
        });

    } else {
        alert("no access for the location")
    }
}

getLocation()
setInterval(getLocation, INTERVAL_TIMER)

const showData = (data) => {
    const degrees = Math.round(data.current.temp_c) 
    const feelslike = Math.round(data.current.feelslike_c)
    document.getElementById("condImg").src = data.current.condition.icon;
    document.getElementById("degrees").textContent = degrees ;
    document.getElementById("condition").textContent = data.current.condition.text;
    document.getElementById("area").textContent = data.location.region + ', ' + data.location.country;
    document.getElementById("feels-like").textContent = feelslike;
    document.getElementById("humidity").textContent = data.current.humidity + ' %'
}


