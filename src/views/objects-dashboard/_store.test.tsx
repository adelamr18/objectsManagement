import { objectsDashboardReducer as reducer } from "./store";

describe("ordersDashboardReducer", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {
        type: ""
      })
    ).toEqual({
      objects: [],
      fetchFromApi: false
    });
  });

  it("should add an object to the objects array", () => {
    expect(
      reducer(
        {
          objects: [],
          fetchFromApi: false
        },
        {
          type: "ADD_OBJECT",
          payload: {
            object: {
              type: "desk",
              name: "34",
              description: "This is a desk",
              id: 1
            }
          }
        }
      )
    ).toEqual({
      objects: [
        {
          type: "desk",
          name: "34",
          description: "This is a desk",
          id: 1
        }
      ],
      fetchFromApi: false
    });
  });

  it("should delete an object having the same id of an objects that exists in the state objects array", () => {
    expect(
      reducer(
        {
          objects: [
            {
              type: "desk",
              name: "34",
              description: "This is a desk",
              id: 1
            }
          ],
          fetchFromApi: false
        },
        {
          type: "DELETE_OBJECT",
          payload: {
            id: 1
          }
        }
      )
    ).toEqual({
      objects: [],
      fetchFromApi: false
    });
  });

  it("should edit a previously stored object in the state objects array", () => {
    expect(
      reducer(
        {
          objects: [
            {
              type: "desk",
              name: "34",
              description: "This is a desk",
              id: 1
            }
          ],
          fetchFromApi: false
        },
        {
          type: "EDIT_OBJECT",
          payload: {
            editedObject: {
              type: "Employee",
              name: "David",
              description: "Entry date:2020-01-24",
              id: 1
            }
          }
        }
      )
    ).toEqual({
      objects: [
        {
          type: "Employee",
          name: "David",
          description: "Entry date:2020-01-24",
          id: 1
        }
      ],
      fetchFromApi: false
    });
  });
});
