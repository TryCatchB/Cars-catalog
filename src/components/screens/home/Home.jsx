import { useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async (url = "data.json") => {
      const response = await fetch(url);
      const data = await response.json();

      setCars(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1> Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p> There is no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
