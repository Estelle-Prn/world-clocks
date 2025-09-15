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

  //Paris
  let parisDate = document.querySelector("#paris .date");
  let parisTime = document.querySelector("#paris .time");
  let parisLocation = moment().tz("Europe/Paris");

  parisDate.innerHTML = parisLocation.format("MMM Do YYYY");
  parisTime.innerHTML = parisLocation.format("HH:mm:ss [<span>]A[</span>]");
}

upDateTime();
setInterval(upDateTime, 1000);
