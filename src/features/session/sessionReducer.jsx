import { createReducer } from "../../app/common/util/reducerUtil";
import {
  CREATE_SESSION,
  DELETE_SESSION,
  UPDATE_SESSION
} from "./sessionConstants";

const initialState = [
  {
    id: "1",
    title: "Physics 223 prep for Midterm",
    date: "2018-03-27",
    category: "physics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Ames, IA",
    venue: "Iowa State University Library, Morrill Road, Ames, IA, USA",
    venueLatLng: {
      lat: 42.0281254,
      lng: -93.64881409999998
    },
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
    venue: "Pizza Pit Extreme, Welch Avenue, Ames, IA, USA",
    venueLatLng: {
      lat: 42.0210482,
      lng: -93.65051140000003
    },
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

export const createSession = (state, payload) => {
  return [...state, Object.assign({}, payload.session)];
};

export const updateSession = (state, payload) => {
  return [
    ...state.filter(session => session.id !== payload.session.id),
    Object.assign({}, payload.session)
  ];
};

export const deleteSession = (state, payload) => {
  return [...state.filter(session => session.id !== payload.sessionId)];
};

export default createReducer(initialState, {
  [CREATE_SESSION]: createSession,
  [UPDATE_SESSION]: updateSession,
  [DELETE_SESSION]: deleteSession
});
