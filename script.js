function upDateTime() {
  //Rome
  let romeDate = document.querySelector("#rome .date");
  let romeTime = document.querySelector("#rome .time");
  //let romeLocation = moment().tz("Europe / Rome");

  romeDate.innerHTML = moment().tz("Europe/Rome").format("MMM Do YYYY");
  romeTime.innerHTML = moment()
    .tz("Europe/Rome")
    .format("HH:mm:ss [<span>]A[</span>]");

  //London
  let londonDate = document.querySelector("#london .date");
  let londonTime = document.querySelector("#london .time");
  //let londonLocation = moment().tz("Europe / London");

  londonDate.innerHTML = moment().tz("Europe/London").format("MMM Do YYYY");
  londonTime.innerHTML = moment()
    .tz("Europe/London")
    .format("HH:mm:ss [<span>]A[</span>]");

  //Tokyo
  let tokyoDate = document.querySelector("#tokyo .date");
  let tokyoTime = document.querySelector("#tokyo .time");
  let tokyoLocation = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoLocation.format("MMM Do YYYY");
  tokyoTime.innerHTML = tokyoLocation.format("HH:mm:ss [<span>]A[</span>]");

  //Hawaii
  let hawaiiDate = document.querySelector("#hawaii .date");
  let hawaiiTime = document.querySelector("#hawaii .time");
  let hawaiiLocation = moment().tz("US/Hawaii");

  hawaiiDate.innerHTML = hawaiiLocation.format("MMM Do YYYY");
  hawaiiTime.innerHTML = hawaiiLocation.format("HH:mm:ss [<span>]A[</span>]");
}

upDateTime();
setInterval(upDateTime, 1000);

function upDateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityTimeZone = moment().tz(timeZone);
  let cityName = timeZone.split("/")[1];
  let cities = document.querySelector(".cities");
  cities.innerHTML = `<div class="city">
          <div class="name-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTimeZone.format("MMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTimeZone.format(
            "HH:mm:ss [<span>]A[</span>]"
          )}</div>
          
        </div>
        </br>
        <a href="/">Back to all the cities 🛫</a>`;
}

let citySelected = document.querySelector("#select");
citySelected.addEventListener("change", upDateCity);
