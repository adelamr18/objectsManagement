import * as actions from "./actions";
describe("actions", () => {
  it("should dispatch an action  to add a new object", () => {
    const object = {
      type: "desk",
      name: "34",
      description: "This is a desk",
      id: 1
    };
    const addObjectAction = {
      type: "ADD_OBJECT",
      payload: {
        object
      }
    };
    expect(actions.addObject(object)).toEqual(addObjectAction);
  });

  it("should dispatch an action containing the necessary id for object deletion", () => {
    const id = 1;
    const deleteObjectAction = {
      type: "DELETE_OBJECT",
      payload: {
        id
      }
    };
    expect(actions.deleteObject(id)).toEqual(deleteObjectAction);
  });

  it("should dispatch an action to edit an object", () => {
    const editedObject = {
      type: "desk",
      name: "34",
      description: "This is a desk",
      id: 1
    };
    const editObjectAction = {
      type: "EDIT_OBJECT",
      payload: {
        editedObject
      }
    };
    expect(actions.editObject(editedObject)).toEqual(editObjectAction);
  });
});
