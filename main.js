const API_KEY = 'd9d23c4b33da4fb5bd3121603261702';
let position = "";

const getData = async (location) => {
    console.log(location)
    // const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.coords.latitude},${location.coords.longitude}`;
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Tel+Aviv`;

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
    alert("no acess for the location")
}

const showData = (data)=> {
   let degrees =  data.current.temp_c;
   let condition = data.current.condition.text;
   let conditionImg = data.current.condition.icon;
   let region = data.location.region;
   let country = data.location.country;
   let feelslike = data.current.feelslike_c;
   let humidity = data.current.humidity;
   let contentbox = document.getElementsByClassName("content")[0];
   contentbox.innerHTML = (`<img src="${conditionImg}"/> <br/>${degrees} C<br/> ${condition}<br/> ${country},  ${region}`)
   let leftfooter = document.getElementsByClassName("leftfooter")[0];
   leftfooter.innerHTML += (`${feelslike} C <br/>`)
      let rightfooter = document.getElementsByClassName("rightfooter")[0];
   rightfooter.innerHTML += (`${humidity} % <br/>`)
}

