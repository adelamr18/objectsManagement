export interface ObjectDetails {
  type: string;
  name: string;
  description: string;
  id: number;
}

export interface State {
  objects: ObjectDetails[];
  fetchFromApi: boolean;
}

export interface Action {
  payload?: any;
  type: string;
}

export interface ComponentState {
  objects: {
    objects: ObjectDetails[];
    fetchFromApi: boolean;
  };
}

export interface formObject {
  type: string;
  name: string;
  description: string;
}
