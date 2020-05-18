import React from "react";
import { deleteObject } from "../../../views/objects-dashboard/actions";
import { useDispatch } from "react-redux";
import { ObjectDetails } from "../../../views/objects-dashboard/types";
import "./card.css";

interface ObjectCardProps {
  name: string;
  type: string;
  description: string;
  id: number;
  editObject: (object: ObjectDetails) => void;
}

export default function ObjectCard(props: ObjectCardProps) {
  const { name, type, description, id, editObject } = props;
  const dispatch = useDispatch();
  return (
    <div className="card-container-inner">
      <div className="card">
        <div className="card-header-with-icons">
          <div className="card-title">{name}</div>
          <div className="delete-or-edit-object">
            <div id="remove-object">
              <i
                onClick={() => dispatch(deleteObject(id))}
                className="far fa-trash-alt"
              ></i>
            </div>
            <div id="edit-object">
              <i
                onClick={() =>
                  editObject({
                    name,
                    type,
                    description,
                    id
                  })
                }
                className="fa fa-edit"
              ></i>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-with-title">{type}</div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
