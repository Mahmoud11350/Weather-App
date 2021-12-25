import { useState, useEffect } from "react";
import Form from "./Form";
import City from "./City";

function Weather() {
  const [data, setData] = useState();
  const fetchHandler = (city) => {
    fetch(
      "http://api.weatherstack.com/current?access_key=4496c2b6ac7d376724a865c3dd45c0ed&query=" +
        city
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetch("https://ipinfo.io/json?token=ca8477480319ce")
      .then((response) => response.json())
      .then((jsonResponse) => fetchHandler(jsonResponse.city));
  }, []);
  return (
    <>
      {data !== undefined && (
        <div className={data.current.is_day === "yes" ? "morning" : "night"}>
          <Form fetchHandler={fetchHandler} />
          <City data={data} />
        </div>
      )}
    </>
  );
}
export default Weather;
