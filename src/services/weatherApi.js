import axios from "axios";
import moment from "moment";

export const getWeather = async () => {
  let shortData = [];
  let sol_keys;
  const { data } = await axios(
    "https://api.nasa.gov/insight_weather/?api_key=fsRKcQxMJ8ex7tCtviu1PdKKOhi9K9mw7xxqN1dH&feedtype=json&ver=1.0"
  );
  sol_keys = data.sol_keys;
  for (let i = 0; i < 7; i++) {
    shortData.push([
      sol_keys[i],
      moment(data[sol_keys[i]].First_UTC).format("MMMM DD"),
      {
        cmin: Math.round(data[sol_keys[i]].AT.mn),
        cmax: Math.round(data[sol_keys[i]].AT.mx),
      },
      {
        fmin: Math.round(data[sol_keys[i]].AT.mn * 1.8 + 32),
        fmax: Math.round(data[sol_keys[i]].AT.mx * 1.8 + 32),
      },
      data[sol_keys[i]].Season,
    ]);
  }
  // console.log("data", data);
  // console.log("shortData", shortData);
  return shortData;
};
