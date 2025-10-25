async function fetchGiphy(target){
    let giphyApiKey = "SHWo9sPUdeRuPOiNeJXqhZL9hEY8OgDh";
    let giphyQuery = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${target}`;
    let response = await fetch(giphyQuery);
    if(!response.ok) throw(new Error("Error fetching giphy"));
    let giphyObject = await response.json();
    return giphyObject
}

export default fetchGiphy;