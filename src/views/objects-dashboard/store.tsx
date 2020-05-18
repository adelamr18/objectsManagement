import { State, ObjectDetails, Action } from "./types";

const initialState: State = {
  objects: [],
  fetchFromApi: false
};

export const objectsDashboardReducer = (
  state = initialState,
  action: Action
): State => {
  switch (action.type) {
    case "ADD_OBJECT": {
      const { object } = action.payload;
      return {
        ...state,
        objects: state.objects.concat(object)
      };
    }

    case "DELETE_OBJECT": {
      const { id } = action.payload;
      return {
        ...state,
        objects: state.objects.filter(
          (object: ObjectDetails) => object.id !== id
        )
      };
    }

    case "EDIT_OBJECT": {
      const { editedObject } = action.payload;
      return {
        ...state,
        objects: state.objects.map((it: ObjectDetails) => {
          if (it.id === editedObject.id) {
            it.name = editedObject.name;
            it.type = editedObject.type;
            it.description = editedObject.description;
            return it;
          }
          return it;
        })
      };
    }

    case "FETCH_OBJECTS": {
      const { objectsData } = action.payload;
      debugger;
      return {
        ...state,
        objects: objectsData,
        fetchFromApi: true
      };
    }

    default:
      return state;
  }
};
