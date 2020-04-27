import axios from "axios";

export const getWeather = async () => {
  const { data } = await axios(
    "https://api.nasa.gov/insight_weather/?api_key=fsRKcQxMJ8ex7tCtviu1PdKKOhi9K9mw7xxqN1dH&feedtype=json&ver=1.0"
  );
  return data;
};
