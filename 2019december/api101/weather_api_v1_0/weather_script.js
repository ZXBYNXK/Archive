let input_value = document.getElementById("search_city_input");
input_value.addEventListener("keypress", loadApiData);

//1 set XHR constructor object
function loadApiData() {
  const Xhr = new XMLHttpRequest();

  //2. Open a XHR communicatons channel
  Xhr.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?q=${input_value.value}&units=imperial&APPID=984fd99c391061acdb523a72ad11bd1e`,
    true
  );

  //3. Create a onload

  Xhr.onload = () => {
    const parsed_text = JSON.parse(Xhr.responseText);
    let searched_item_box = document.getElementById("result");

    if (parsed_text.main != undefined) {
      console.log(parsed_text);
      let iconCode = parsed_text.weather[0].icon,
        iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png",
        iconDiv = document.getElementById("icon");
      searched_item_box.innerHTML = `<div>City: ${parsed_text.name}<br> Country: ${parsed_text.sys.country}<br> Location: lon ${parsed_text.coord.lat} lat ${parsed_text.coord.lon}<div>`;
      searched_item_box.innerHTML += `<div>Tempature: ${parsed_text.main.temp} F<div>`;
      searched_item_box.innerHTML += `<div>Overview: ${parsed_text.weather[0].description}<div>`;
      iconDiv.innerHTML = `<div id="icon"><img id="wicon" src="${iconUrl}" alt="Weather icon"></div>`;

      //res.sendFile('___dirname' + '/file.ext' )
      //Delivers html files to the browser
    }
  };
  //4). Request the data to send
  Xhr.send();
}
