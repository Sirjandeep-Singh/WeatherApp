const weatherDOM = function(weatherObject){
    let weatherdiv = document.getElementById('weather');
    let desc = document.createElement('div');
    let conditions = document.createElement('div');
    let city = document.createElement('div');
    let temp = document.createElement('div');
    city.classList.toggle('city');
    temp.classList.toggle('temp');
    temp.id = 'temp';
    desc.classList.toggle('desc');
    conditions.classList.toggle('conditions');
    city.textContent = weatherObject.address;
    temp.textContent = 'Temperature: ' + weatherObject.currentConditions.temp + `°F`;
    conditions.textContent = 'Current Conditions: ' + weatherObject.currentConditions.conditions;
    desc.textContent = weatherObject.description;
    weatherdiv.appendChild(city);
    weatherdiv.appendChild(temp);
    weatherdiv.appendChild(conditions);
    weatherdiv.appendChild(desc);

}

export default weatherDOM;