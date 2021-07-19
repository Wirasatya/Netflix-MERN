import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { useStateGlobal } from "../../context/StateProvider";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [{ user }] = useStateGlobal();

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer " + user?.accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    let isMounted = true;
    if (isMounted) {
      sessionStorage.setItem("user", JSON.stringify(user));
      getRandomLists();
    }
    return () => {
      isMounted = false;
    };
  }, [type, genre, user]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list.title} list={list} />
      ))}
    </div>
  );
};

export default Home;
