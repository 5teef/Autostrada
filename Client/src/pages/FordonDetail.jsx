import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ItemDetails() {
  const { slug } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await fetch("/api/cars");
        const data = await response.json();
        const foundItem = data.find(car => car.slug === slug); // Använd find för att hitta objektet med matchande slug
        setItem(foundItem);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    loadCars();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla till toppen när item uppdateras
  }, [item]);

  if (!item) {
    return null;
  }

  return (
    <div className="item-container">
      <div className="details-container">
        <h1>{item.title}</h1>
      </div>
    </div>
  );
}
