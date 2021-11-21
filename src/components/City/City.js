import { nanoid } from "nanoid";
import "./City.css";

export const City = () => {
  const cities = require("../../cities.json").filter(
    (city) => city.population > 50000,
  );

  return (
    <div className="city">
      <h2 className="city_header">Ваш город</h2>
      <select className="city_list">
        {cities.map((city) => (
          <option className="city_list_option" key={nanoid()} value={city.city}>
            {city.city}
          </option>
        ))}
      </select>
    </div>
  );
};
