async function fetchContent(target){
    let weatherApiKey = "Z5SN6JRKJQJZGEW2M5392U9NA";
    let weatherQuery = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${target}?key=${weatherApiKey}`;
    let response = await fetch(weatherQuery);
    if(!response.ok) throw(new Error("Error fetching weather"));
    let weatherObject = await response.json();
    console.log(weatherObject);
    return weatherObject;
}

export default fetchContent;