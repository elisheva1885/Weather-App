const API_KEY = 'd9d23c4b33da4fb5bd3121603261702';
let interval = 30000;

const getData = async (location) => {
    console.log("now on getData!!!");
    console.log(location)
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.coords.latitude},${location.coords.longitude}`;
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json();
        console.log(result);
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
setInterval(getLocation, interval)

const showData = (data) => {
    document.getElementById("condImg").src = data.current.condition.icon;
    document.getElementById("degrees").textContent = data.current.temp_c + ' C';
    document.getElementById("condition").textContent = data.current.condition.text;
    document.getElementById("area").textContent = data.location.region + ', ' + data.location.country;
    document.getElementById("feels-like").textContent = data.current.feelslike_c + ' C'
    document.getElementById("humidity").textContent = data.current.humidity + ' %'
}


