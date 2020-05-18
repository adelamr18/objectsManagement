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
    default:
      return state;
  }
};
