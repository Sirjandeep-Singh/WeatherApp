const resetDOM = function(weatherObject, giphyObject){
    let switchbtn = document.getElementById('switch');
    weatherObject = null;
    giphyObject = null;
    let weatherdiv = document.getElementById('weather');
    weatherdiv.innerHTML = "";
    if(switchbtn.classList.contains('show')) switchbtn.classList.toggle('show');
}

export default resetDOM;