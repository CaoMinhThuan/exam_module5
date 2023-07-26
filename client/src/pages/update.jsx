import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
export default function EditTours() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tours, setTours] = useState({
    id : 1 ,
    title: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:8000/tuors/${id}`).then((response) => {
      setTours(response.data);
    });
  }, [id]);
  const onChangeHandled = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTours({ ...tours, [name]: value });
  };
  return (
    <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h1>Edit Tours</h1>
      <br />
      Name Tour :
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        name="title"
        value={tours.title}
        onChange={onChangeHandled}
      />
      <br /> 
      Price Tour :
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Enter Price"
        name="price"
        value={tours.price}
        onChange={onChangeHandled}
      />
      <br />
      Description :
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Enter Description"
        name="description"
        value={tours.description}
        onChange={onChangeHandled}
      />
      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          axios.put(`http://localhost:8000/tuors/${id}`, tours);
          navigate("/");
        }}
      >
        Update
      </button>
    </div>
  );
}
