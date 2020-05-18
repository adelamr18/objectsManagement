import React, { useEffect, useState } from "react";
import ObjectCard from "../../shared/components/card/card";
import { ObjectDetails, ComponentState } from "./types";
import addButton from "../../assets/images/addButton.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchObjects } from "./actions";
import ObjectsModal from "../../shared/components/modal/modal";
import "./objects-dashboard.css";
import SearchBar from "../../shared/components/search-bar/search-bar";
import { relationsTitles } from "../../shared/constants/defines";

export default function ObjectsDashboard() {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [isEdit, setEditMode] = useState(false);
  const [objects, setObjects] = useState<ObjectDetails[]>([]);
  const [relations, setRelations] = useState<ObjectDetails[]>([]);
  const [editedObject, setEditedObject] = useState({
    name: "",
    type: "",
    description: "",
    id: 0
  });
  let objectsInformation = useSelector(
    (state: ComponentState) => state.objects["objects"]
  );
  let fetchFromApi = useSelector(
    (state: ComponentState) => state.objects["fetchFromApi"]
  );
  useEffect(() => {
    if (!fetchFromApi) {
      dispatch(fetchObjects());
    }
  }, []);
  useEffect(() => {
    if (objectsInformation) setObjects(objectsInformation);
  }, [objectsInformation]);
  const editObject = (editedObject: ObjectDetails) => {
    setModalShow(true);
    setEditMode(true);
    setEditedObject(editedObject);
    displayRelations(editedObject);
  };
  const addObject = () => {
    setModalShow(true);
    setEditMode(false);
    setEditedObject({ name: "", type: "", description: "", id: 0 });
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchTerm = e.target.value;
    let filteredObjects = objectsInformation.filter(
      (object: ObjectDetails) =>
        object.type.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
    setObjects(filteredObjects);
    if (!searchTerm) setObjects(objectsInformation);
  };
  const displayRelations = (editedObject: ObjectDetails) => {
    let relationsData = objects.filter((object: ObjectDetails) => {
      if (editedObject.type.toLowerCase() === relationsTitles.desk) {
        return getDeskRelations(object);
      }
      if (editedObject.type.toLowerCase() === relationsTitles.calculator) {
        return getCalculatorRelations(object);
      }
      if (editedObject.type.toLowerCase() === relationsTitles.employee) {
        return getEmployeeRelations(object);
      }
      if (editedObject.type.toLowerCase() === relationsTitles.keyboard) {
        return getKeyboardRelations(object);
      }
      if (editedObject.type.toLowerCase() === relationsTitles.server) {
        return getServerRelations(object);
      }
      return false;
    });
    setRelations(relationsData);
  };
  const getDeskRelations = (object: ObjectDetails) => {
    let filterByCalculator = object.type
      .toLowerCase()
      .includes(relationsTitles.calculator);
    let filterByEmployee = object.type
      .toLowerCase()
      .includes(relationsTitles.employee);
    let filterByKeyboard = object.type
      .toLowerCase()
      .includes(relationsTitles.keyboard);
    return filterByCalculator || filterByEmployee || filterByKeyboard;
  };
  const getCalculatorRelations = (object: ObjectDetails) => {
    let filterByDesk = object.type.toLowerCase().includes(relationsTitles.desk);
    let filterByEmployee = object.type
      .toLowerCase()
      .includes(relationsTitles.employee);
    return filterByDesk || filterByEmployee;
  };
  const getEmployeeRelations = (object: ObjectDetails) => {
    let filterByDesk = object.type.toLowerCase().includes(relationsTitles.desk);
    let filterByCalculator = object.type
      .toLowerCase()
      .includes(relationsTitles.calculator);
    let filterByKeyboard = object.type
      .toLowerCase()
      .includes(relationsTitles.keyboard);
    let filterByServer = object.type
      .toLowerCase()
      .includes(relationsTitles.server);
    return (
      filterByDesk || filterByCalculator || filterByKeyboard || filterByServer
    );
  };
  const getKeyboardRelations = (object: ObjectDetails) => {
    let filterByEmployee = object.type
      .toLowerCase()
      .includes(relationsTitles.employee);
    return filterByEmployee;
  };
  const getServerRelations = (object: ObjectDetails) => {
    let filterByEmployee = object.type
      .toLowerCase()
      .includes(relationsTitles.employee);
    return filterByEmployee;
  };

  return (
    <div className="dashboard-container-inner">
      <div className="search-bar-container-outer">
        <SearchBar handleSearchChange={handleSearchChange} />
      </div>
      <div className="cards-container-outer">
        <MapObjectsCards editObject={editObject} objects={objects} />
      </div>
      <div className="add-object-container">
        <img
          onClick={() => addObject()}
          alt="add-button"
          id="add-button"
          src={addButton}
        ></img>
      </div>
      <ObjectsModal
        isEdit={isEdit}
        show={modalShow}
        onHide={() => setModalShow(false)}
        editedObject={editedObject}
        relations={relations}
      />
    </div>
  );
}

interface mapObjectsCardsProps {
  objects: ObjectDetails[];
  editObject: (object: ObjectDetails) => void;
}

function MapObjectsCards(props: mapObjectsCardsProps) {
  const { objects, editObject } = props;
  return (
    <>
      {objects.map((obj: ObjectDetails) => (
        <ObjectCard
          key={obj.id}
          name={obj.name}
          type={obj.type}
          description={obj.description}
          id={obj.id}
          editObject={editObject}
        />
      ))}
    </>
  );
}
