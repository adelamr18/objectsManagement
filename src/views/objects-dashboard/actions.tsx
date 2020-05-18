import { ObjectDetails } from "./types";
import axios from "axios";

export const addObject = (object: ObjectDetails) => ({
  type: "ADD_OBJECT",
  payload: {
    object
  }
});

export const deleteObject = (id: number) => ({
  type: "DELETE_OBJECT",
  payload: {
    id
  }
});

export const editObject = (editedObject: ObjectDetails) => ({
  type: "EDIT_OBJECT",
  payload: {
    editedObject
  }
});

export const fetchObjects = () => async (dispatch: any) => {
  const res = await axios.get("api/objects");
  dispatch({
    type: "FETCH_OBJECTS",
    payload: res.data
  });
};
