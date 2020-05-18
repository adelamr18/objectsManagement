import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  ComponentState,
  ObjectDetails
} from "../../../views/objects-dashboard/types";
import { useSelector, useDispatch } from "react-redux";
import {
  addObject,
  editObject
} from "../../../views/objects-dashboard/actions";
import { modalTitles } from "../../../shared/constants/defines";
import RelationsCard from "../relations-card/relations-card";
import "./modal.css";

interface objectsModalProps {
  onHide: VoidFunction;
  show: boolean;
  isEdit: boolean;
  editedObject: ObjectDetails;
  relations: ObjectDetails[];
}

export default function ObjectsModal(props: objectsModalProps) {
  const { register, handleSubmit } = useForm();
  const { onHide, isEdit, editedObject, show, relations } = props;
  const dispatch = useDispatch();
  const objectsInformation = useSelector(
    (state: ComponentState) => state.objects["objects"]
  );
  const lastAddedObject = [...objectsInformation].pop();
  const onSubmit = ({ name, type, description }: any) => {
    if (lastAddedObject && !isEdit) {
      addNewObject(name, type, description, lastAddedObject["id"]);
    }
    if (!lastAddedObject && !isEdit) {
      addNewObject(name, type, description, 0);
    }
    if (isEdit) {
      editPreviousObject(name, type, description, editedObject.id);
    }
    onHide();
  };

  const addNewObject = (
    name: string,
    type: string,
    description: string,
    id: number
  ) => {
    let object = {
      name,
      type,
      description,
      id: id + 1
    };
    dispatch(addObject(object));
  };
  const editPreviousObject = (
    name: string,
    type: string,
    description: string,
    id: number
  ) => {
    let object = {
      name,
      type,
      description,
      id
    };
    dispatch(editObject(object));
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {isEdit ? `${modalTitles.editObject}` : `${modalTitles.addObject}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>{modalTitles.type}</Form.Label>
            <Form.Control
              name="type"
              defaultValue={editedObject.type}
              ref={register}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>{modalTitles.name}</Form.Label>
            <Form.Control
              name="name"
              defaultValue={editedObject.name}
              ref={register}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>{modalTitles.description}</Form.Label>
            <Form.Control
              defaultValue={editedObject.description}
              name="description"
              ref={register}
              type="text"
            />
          </Form.Group>
          {isEdit && (
            <Modal.Footer className="relations-container-with-title">
              <h4>{modalTitles.relations}</h4>
              <div className="relations-card-container-outer">
                <RelationsMap relations={relations} />
              </div>
            </Modal.Footer>
          )}
          <Modal.Footer>
            <Button type="submit">
              {isEdit ? `${modalTitles.confirm}` : `${modalTitles.add}`}
            </Button>
            <Button onClick={onHide}>{modalTitles.close}</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

interface relationsMapProps {
  relations: ObjectDetails[];
}

function RelationsMap(props: relationsMapProps) {
  const { relations } = props;
  return (
    <>
      {relations.map((obj: ObjectDetails) => (
        <RelationsCard key={obj.id} name={obj.name} type={obj.type} />
      ))}
    </>
  );
}
