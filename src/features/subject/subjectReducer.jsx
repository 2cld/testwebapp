import { createReducer } from "../../app/common/util/reducerUtil";
import {
  CREATE_SUBJECT,
  DELETE_SUBJECT,
  UPDATE_SUBJECT
} from "./subjectConstants";

const initialState = [
  {
    id: "1",
    title: "Physics 223 prep for Midterm",
    date: "2018-03-27",
    category: "physics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Ames, IA",
    venue: "ISU Library",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Chemistry 101 Midterm Exam",
    date: "2018-03-28",
    category: "chemistry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Ames, IA",
    venue: "Pizza Pit",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

export const createSubject = (state, payload) => {
  return [...state, Object.assign({}, payload.subject)];
};

export const updateSubject = (state, payload) => {
  return [
    ...state.filter(subject => subject.id !== payload.subject.id),
    Object.assign({}, payload.subject)
  ];
};

export const deleteSubject = (state, payload) => {
  return [...state.filter(subject => subject.id !== payload.subjectId)];
};

export default createReducer(initialState, {
  [CREATE_SUBJECT]: createSubject,
  [UPDATE_SUBJECT]: updateSubject,
  [DELETE_SUBJECT]: deleteSubject
});
