const API_KEY = 'd9d23c4b33da4fb5bd3121603261702';
let position = "";

const getData = async (location) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json();
        console.log(result);

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

