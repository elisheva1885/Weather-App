const API_KEY = 'd9d23c4b33da4fb5bd3121603261702';
let position = "";

const getData = async (location) => {
    console.log("now on getData!!!");
    console.log(location)
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.coords.latitude},${location.coords.longitude}`;
    // const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Tel+Aviv`;
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
    if (navigator.geolocation) {
        position = navigator.geolocation.getCurrentPosition(getData);

    } else {
        alert("no access for the location")
    }

const getLocation = () => {
    if (navigator.geolocation) {
        position = navigator.geolocation.getCurrentPosition(getData);

    } else {
        alert("no access for the location")
    }
}
let interval = 30000;
setInterval(getLocation, 
    interval
)




const showData = (data) => {
    console.log("on show data");
    
    let degrees = data.current.temp_c;
    let condition = data.current.condition.text;
    let conditionImg = data.current.condition.icon;
    let region = data.location.region;
    let country = data.location.country;
    let feelslike = data.current.feelslike_c;
    let humidity = data.current.humidity;
    let contentbox = document.getElementsByClassName("content")[0];
    contentbox.innerHTML = (`<p><img id="condIcon" src="${conditionImg}"/> <br/><span id="degrees">${degrees} C</span><br/><span id="condition"> ${condition} </span><br/> <span id="area">${country},  ${region}</span></p>`)
    let leftfooter = document.getElementById("leftfooter");
    leftfooter.innerHTML = (`<p><span> ${feelslike} C</span> <br/> feels like </p> <img class="icon" src="icon2.png"/>`)
    let rightfooter = document.getElementById("rightfooter");
    rightfooter.innerHTML = (`<p><span>${humidity} % </span><br/> Humidity </p><img class="icon" src="icon1.png"/>`)
}

