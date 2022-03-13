import { Link } from "react-router-dom";

function Place({ apart, address }) {
  const id = apart[0] + address.substr(0, 3);
  return (
    <div className="as-list-info">
      <input type="checkbox" />

      <Link to={"/as/" + id}>
        {apart} <span> {address}</span>
      </Link>
    </div>
  );
}

export default Place;
