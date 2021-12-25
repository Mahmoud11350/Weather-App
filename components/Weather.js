import { useState, useEffect } from "react";
import City from "./City";

function Weather() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchHandler = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://api.weatherstack.com/current?access_key=4496c2b6ac7d376724a865c3dd45c0ed&query=" +
          city
      );
      const parsedData = await response.json();
      if (parsedData.error) {
        setError(true);
      } else {
        setData(parsedData);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetch("https://ipinfo.io/json?token=ca8477480319ce")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => fetchHandler(jsonResponse.city));
  }, []);
  return (
    <>
      {data !== undefined && (
        <div className={data.current.is_day === "yes" ? "morning" : "night"}>
          <h1
            className="head-title 
          "
          >
            Weather App
          </h1>
          {loading && (
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          )}

          <City error={error} fetchHandler={fetchHandler} data={data} />
        </div>
      )}
    </>
  );
}
export default Weather;
