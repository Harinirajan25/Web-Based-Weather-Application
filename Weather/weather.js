


let btn = document.getElementById("btn");
let key = "0d28d6d668961ee84e0f716719d82300";





btn.addEventListener("click", () => {
    let place = document.getElementById("text").value;
    let res = document.getElementById("hum-card")
    let res2 = document.getElementById("wind-card")
    res2.style.display = "block"
    res.style.display = "inline-block"
    let res1 = document.getElementById("temp-card")
    res1.style.display = "block"





    if (!place) {
        alert("Please enter a city name!");

        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
                
            }
            return response.json();
        })
        .then((data) => {
            let temp = Math.round(data.main.temp - 273.15);
            let hum = data.main.humidity;
            let wind = data.wind.speed;

            document.getElementById("t").textContent = ` ${temp}°C`;
            document.getElementById("h").textContent = `${hum}%`;
            document.getElementById("w").textContent = ` ${wind} km/h`;
        })
        .catch((error) => {
            alert(error.message);

        });
});

