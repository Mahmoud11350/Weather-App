import Form from "./Form";
function City({ data, fetchHandler, error }) {
  const { current, location } = data;

  let city = (
    <div className="city">
      <Form fetchHandler={fetchHandler} />
      {error && (
        <div className="error">
          <h2>Unknown City</h2>
        </div>
      )}
      <div>
        <img src={current.weather_icons} alt={current.weather_descriptions} />
      </div>
      <div className="location">
        <h3>{location.region.toUpperCase()}</h3>
        <h3>{location.country.toUpperCase()}</h3>
      </div>
      <div>
        <h1>Temperature : {current.temperature}</h1>
      </div>
      <div>
        <h3 className="real-feel">Real Feel : {current.feelslike}</h3>
        <h3>{current.weather_descriptions}</h3>
      </div>
      <div>
        <h3>Wind Degree :{current.wind_degree}</h3>
        <h3>Wind Speed : {current.wind_speed} km/hr</h3>
      </div>
      <div>
        <h3>Humidity : {current.humidity} %</h3>
        <h3>Cloud Cover :{current.cloudcover}</h3>
      </div>
    </div>
  );

  return <>{city}</>;
}

export default City;
