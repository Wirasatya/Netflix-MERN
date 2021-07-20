import "./listList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

const ListList = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/listEdit/" + params.row._id, list: params.row }}
            >
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutline
              className="delete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="listList">
      <div className="titleContainer">
        <h1 className="title">List MovieList</h1>
        <Link to="/listNew">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default ListList;
