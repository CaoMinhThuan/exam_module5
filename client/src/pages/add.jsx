import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTours() {
  const navigate = useNavigate();
  const [tours, setTours] = useState({
    id: 0,
    title :'',
    price: "",
    description: "",
  });
  const onChangeHandled = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTours({ ...tours, [name]: value });
  };
  return (
    <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h1>Add Tours</h1>
      <input
        type="text"
        placeholder="Enter Name"
        name="title"
        value={tours.title}
        className="form-control"
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Price"
        name="price"
        value={tours.price}
        className="form-control"
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        value={tours.description}
        className="form-control"
        onChange={onChangeHandled}
      />
      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          axios.post("http://localhost:8000/tuors", tours);
          navigate("/");
        }}
      >
        Add
      </button>
    </div>
  );
}
