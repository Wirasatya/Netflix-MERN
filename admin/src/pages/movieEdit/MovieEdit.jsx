import { Link, useLocation } from "react-router-dom";
import "./movieEdit.scss";
import { Publish } from "@material-ui/icons";

const MovieEdit = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="movieEdit">
      <div className="titleContainer">
        <h1 className="title">Movie</h1>
        <Link to="/movieNew">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="top">
        <div className="topRight">
          <div className="infoTop">
            <img src={movie.img} alt="" className="infoImg" />
            <span className="name">{movie.title}</span>
          </div>
          <div className="infoBottom">
            <div className="infoItem">
              <span className="infoKey">id:</span>
              <span className="infoValue">{movie._id}</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">genre:</span>
              <span className="infoValue">{movie.genre}</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">year:</span>
              <span className="infoValue">{movie.year}</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">limit:</span>
              <span className="infoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form className="form">
          <div className="formLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="formRight">
            <div className="upload">
              <img src={movie.img} alt="" className="uploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MovieEdit;
