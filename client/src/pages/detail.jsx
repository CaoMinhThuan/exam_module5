import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function DetailTours() {
  const { id } = useParams();
  const [tours, setTours] = useState({
    id: 0,
    title : '',
    price: "",
    description: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:8000/tuors/${id}`).then((response) => {
      setTours(response.data);
    });
  }, [id]);
  return (
    <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h1>Detail Tours</h1>
      <span>name: {tours.title} </span>
      <br />
      <span>price: {tours.price} </span>
      <br />
      <span>description: {tours.description} </span>
      <br />
    </div>
  );
}
