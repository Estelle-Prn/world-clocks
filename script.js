let romeDate = document.querySelector("#rome .date");
let romeTime = document.querySelector("#rome .time");

romeDate.innerHTML = moment().format("MMM Do YYYY");
romeTime.innerHTML = moment().format("HH:mm:ss [<span>]A[</span>]");

let londonDate = document.querySelector("#london .date");
let londonTime = document.querySelector("#london .time");

londonDate.innerHTML = moment().format("MMM Do YYYY");
londonTime.innerHTML = moment().format("HH:mm:ss [<span>]A[</span>]");

let tokyoDate = document.querySelector("#tokyo .date");
let tokyoTime = document.querySelector("#tokyo .time");

tokyoDate.innerHTML = moment().format("MMM Do YYYY");
tokyoTime.innerHTML = moment().format("HH:mm:ss [<span>]A[</span>]");

let parisDate = document.querySelector("#paris .date");
let parisTime = document.querySelector("#paris .time");

parisDate.innerHTML = moment().format("MMM Do YYYY");
parisTime.innerHTML = moment().format("HH:mm:ss [<span>]A[</span>]");
