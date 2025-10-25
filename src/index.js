import styles from "./styles.css";
import fetchContent from "./fetchcontent";
import loadingDOM from "./loadingDOM";
import errorDOM from "./errorDOM";
import fetchGiphy from "./fetchgiphy";
import weatherDOM from "./weatherDOM";
import resetDOM from "./resetDOM";

let searchbtn = document.getElementById('search');
let switchbtn = document.getElementById('switch');
let targetCity = document.getElementById('city');
let loadingspan = document.getElementById('loading');
let errorspan = document.getElementById('error');
let weatherObject = null;
let giphyObject = null;
let body = document.getElementById('body');
let content = document.getElementById('content');
searchbtn.addEventListener('click', async ()=> {
    resetDOM(weatherObject, giphyObject);
    loadingDOM(loadingspan);
    if(errorspan.classList.contains('show')) errorDOM(errorspan);
    
    try{
        weatherObject = await fetchContent(targetCity.value);
        giphyObject = await fetchGiphy(weatherObject.currentConditions.icon);

        body.style.backgroundImage = `url(${giphyObject.data.images.original.url})`;
        loadingDOM(loadingspan);
        weatherDOM(weatherObject);
        switchbtn.classList.toggle('show');
    }catch(e){
        errorspan.textContent = e.message;
        loadingDOM(loadingspan);
        errorDOM(errorspan);
    }
});

switchbtn.addEventListener('click', () =>{
    const temp = document.getElementById('temp');
    let currentTemp = parseFloat(temp.textContent.replace(/[^\d.-]/g, ''));
    if(switchbtn.textContent == '°C'){
        switchbtn.textContent = '°F';
        let celsius = (currentTemp - 32) * 5 / 9;
        temp.textContent = 'Temperature: ' + celsius + `\u00B0C`;
    }else{
        switchbtn.textContent = '°C';
        let k = (currentTemp * 9 / 5) + 32 ;
        temp.textContent = 'Temperature: ' + k + `\u00B0F`;
    }
});