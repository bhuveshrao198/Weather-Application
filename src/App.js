import { useState } from "react";
function App() {
  const [inputValue, setinputValue] = useState("");
  const [response, setresponse] = useState();

  const handelSubmit = () => {
    try {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          inputValue +
          "&appid=50a7aa80fa492fa92e874d23ad061374"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "data");
          setresponse(data);
          setinputValue("");
        });
    } catch (err) {
      alert("Wrong city name!");
    }
  };
  return (
    <div className="weather_app_container">
      <div className="nav_container">
        <input
          onChange={(e) => setinputValue(e?.target?.value)}
          placeholder="Search city"
          className=""
        />
        <button onClick={() => handelSubmit()} className="search_button">
          Search
        </button>
      </div>

      <div className="result_board">
        <h1 className="name">{response?.name}</h1>
        <p className="temp">Temp - {response?.main?.temp}</p>
        <p className="desc">Desc - {response?.weather?.[0]?.description}</p>
      </div>
    </div>
  );
}

export default App;
