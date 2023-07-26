import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function ListTours() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/tuors").then((response) => {
      setList(response.data);
    });
  }, [list]);
  const DeleteTours = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa!")) {
      axios.delete(`http://localhost:8000/tuors/${id}`).then(() => {
        axios.get("http://localhost:8000/tuors").then((response) => {
          setList(response.data);
        });
      });
    }
  };
  return (
    <div className="mx-3 shadow p-3 mb-5 bg-body rounded mt-5">
      <h1>Tours List</h1>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          navigate("/add");
        }}
      >
        Add Tours
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col" >Description</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={`/detail/${item.id}`}>
                  <span className="">{item.title}</span>
                </Link>
              </td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger me-3"
                  onClick={() => {
                    DeleteTours(`${item.id}`);
                  }}
                >
                  Xoá
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    navigate(`/tours/${item.id}`);
                  }}
                >
                  Cập Nhật
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
