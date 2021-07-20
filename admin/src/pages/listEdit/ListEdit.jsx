import { Link, useLocation } from "react-router-dom";
import "./listEdit.scss";
// import { Publish } from "@material-ui/icons";

const ListEdit = () => {
  const location = useLocation();
  const list = location.list;
  return (
    <div className="listEdit">
      <div className="titleContainer">
        <h1 className="title">List</h1>
        <Link to="/newList">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="top">
        <div className="topRight">
          <div className="infoTop">
            <span className="name">{list.title}</span>
          </div>
          <div className="infoBottom">
            <div className="infoItem">
              <span className="infoKey">id:</span>
              <span className="infoValue">{list._id}</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">genre:</span>
              <span className="infoValue">{list.genre}</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">type:</span>
              <span className="infoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form className="form">
          <div className="formLeft">
            <label>List Title</label>
            <input type="text" placeholder={list.title} />
            <label>Type</label>
            <input type="text" placeholder={list.type} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="formRight">
            <button className="button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListEdit;
