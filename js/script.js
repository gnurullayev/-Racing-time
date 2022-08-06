var elForm = document.querySelector(".form");
var elInput = document.querySelectorAll(".form-input");
var elText = document.querySelectorAll(".text");

elForm.addEventListener("submit", function time(e) {
    e.preventDefault()

    var PERSON_SPEED =Number(elInput[0].value);
    var MOTO_SPEED =  Number(elInput[1].value);
    var CAR_SPEED = Number(elInput[2].value);
    var PLANE_SPEED =Number(elInput[3].value);
    var inputValue = Number(elInput[4].value)

    var PERSON_TIME = Math.floor(inputValue / PERSON_SPEED);
    var MOTO_TIME = parseInt(inputValue / MOTO_SPEED);
    var CAR_TIME = parseInt(inputValue / CAR_SPEED);
    var PLANE_TIME = parseInt(inputValue / PLANE_SPEED);

    var PERSON_TIME_MIN = Math.floor((inputValue / PERSON_SPEED) * 100 % 100 * 0.6);
    var MOTO_TIME_MIN = Math.floor((inputValue / MOTO_SPEED) * 100 % 100 * 0.6);
    var CAR_TIME_MIN = Math.floor((inputValue / CAR_SPEED) * 100 % 100 * 0.6);
    var PLANE_TIME_MIN = Math.floor((inputValue / PLANE_SPEED) * 100 % 100 * 0.6);

    var personIsSec = ((inputValue / PERSON_SPEED) * 100 % 100 * 0.6)
    var motoIsSec = ((inputValue / MOTO_SPEED) * 100 % 100 * 0.6)
    var carIsSec = ((inputValue / CAR_SPEED) * 100 % 100 * 0.6)
    var planeIsSec = ((inputValue / PLANE_SPEED) * 100 % 100 * 0.6)

    var PERSON_TIME_MIN_SEC = Math.round(personIsSec * 100 % 100 * 0.6);
    var MOTO_TIME_MIN_SEC = Math.round(motoIsSec * 100 % 100 * 0.6);
    var CAR_TIME_MIN_SEC =  Math.round(carIsSec * 100 % 100 * 0.6);
    var PLANE_TIME_MIN_SEC = Math.round(planeIsSec * 100 % 100 * 0.6);

    function timeInner(perHoure, perMinut,perSec, motoHoure, motoMinut,motoSec,carHoure,carMinut,carSec,planeHoure,planeMinut,planeSec) {
        elText[0].textContent = ` ${perHoure}  ${perMinut}  ${perSec}`;
        elText[1].textContent = ` ${motoHoure}  ${motoMinut }  ${motoSec}`;
        elText[2].textContent = `${carHoure}  ${carMinut}  ${carSec}`;
        elText[3].textContent =  `${planeHoure}  ${planeMinut}  ${planeSec}`;
    }

    if(inputValue <= 0 ) {
        elText[0].textContent = `Iltimos 0 dan katta son kiriting`; 
        elText[1].textContent = `Iltimos 0 dan katta son kiriting`;
        elText[2].textContent = `Iltimos 0 dan katta son kiriting`;
        elText[3].textContent = `Iltimos 0 dan katta son kiriting`;
    } 
    else if(PERSON_TIME < 1 && PERSON_TIME_MIN < 1 ) {
        timeInner("","", PERSON_TIME_MIN_SEC+"sekund", "","", MOTO_TIME_MIN_SEC+"sekund", "","", CAR_TIME_MIN_SEC+"sekund","", "", PLANE_TIME_MIN_SEC+"sekund")
    } 
    else if(PERSON_TIME < 1 && MOTO_TIME_MIN < 1 && CAR_TIME_MIN < 1 && PLANE_TIME_MIN < 1) {
        timeInner("",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", "","", MOTO_TIME_MIN_SEC+"sekund", "","", CAR_TIME_MIN_SEC+"sekund","", "", PLANE_TIME_MIN_SEC+"sekund")
    } 
    else if(PERSON_TIME < 1 && MOTO_TIME < 1 && CAR_TIME_MIN < 1 && PLANE_TIME_MIN < 1) {
        timeInner("",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", "", MOTO_TIME_MIN+"minut", MOTO_TIME_MIN_SEC+"sekund", "","", CAR_TIME_MIN_SEC+"sekund","", "", PLANE_TIME_MIN_SEC+"sekund")
    } 
    else if(PERSON_TIME < 1 && MOTO_TIME < 1 && CAR_TIME_MIN >= 1  && PLANE_TIME_MIN < 1) {
        timeInner( "",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", "", MOTO_TIME_MIN+"minut", MOTO_TIME_MIN_SEC+"sekund", "",CAR_TIME_MIN+"minut", CAR_TIME_MIN_SEC+"sekund","", "", PLANE_TIME_MIN_SEC+"sekund")
    } 
    else if(PERSON_TIME >= 1 && MOTO_TIME < 1 && CAR_TIME < 1  && PLANE_TIME_MIN < 1) {
        timeInner( PERSON_TIME+"soat",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", "", MOTO_TIME_MIN+"minut", MOTO_TIME_MIN_SEC+"sekund", "",CAR_TIME_MIN+"minut", CAR_TIME_MIN_SEC+"sekund","", "", PLANE_TIME_MIN_SEC+"sekund")
    }
    else if(PERSON_TIME >= 1 && MOTO_TIME < 1 && CAR_TIME < 1  && PLANE_TIME < 1) {
        timeInner( PERSON_TIME+"soat",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", "", MOTO_TIME_MIN+"minut", MOTO_TIME_MIN_SEC+"sekund", "",CAR_TIME_MIN+"minut", CAR_TIME_MIN_SEC+"sekund","", PLANE_TIME_MIN+"min", PLANE_TIME_MIN_SEC+"sekund")
    }
    else if(MOTO_TIME >= 1 && CAR_TIME < 1  && PLANE_TIME < 1) {
        timeInner( PERSON_TIME+"soat",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", MOTO_TIME+"soat", MOTO_TIME_MIN+"minut", MOTO_TIME_MIN_SEC+"sekund", "",CAR_TIME_MIN+"minut", CAR_TIME_MIN_SEC+"sekund","", PLANE_TIME_MIN+"min", PLANE_TIME_MIN_SEC+"sekund")
    }
    else if(CAR_TIME >= 1  && PLANE_TIME < 1) {
        timeInner( PERSON_TIME+"soat",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", MOTO_TIME+"soat", MOTO_TIME_MIN+"minut", MOTO_TIME_MIN_SEC+"sekund", CAR_TIME+"soat",CAR_TIME_MIN+"minut", CAR_TIME_MIN_SEC+"sekund","", PLANE_TIME_MIN+"min", PLANE_TIME_MIN_SEC+"sekund")
    }
    else if(PLANE_TIME >= 1) {
        timeInner( PERSON_TIME+"soat",PERSON_TIME_MIN+"minut", PERSON_TIME_MIN_SEC+"sekund", MOTO_TIME+"soat", MOTO_TIME_MIN+"minut", MOTO_TIME_MIN_SEC+"sekund", CAR_TIME+"soat",CAR_TIME_MIN+"minut", CAR_TIME_MIN_SEC+"sekund",PLANE_TIME    +"soat", PLANE_TIME_MIN+"min", PLANE_TIME_MIN_SEC+"sekund")
    }    
})
