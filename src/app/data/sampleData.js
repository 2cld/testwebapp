const sampleData = {
    sessions: [
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
      ],
    subjects: [
        {
            id: "1",
            title: "Physics 223 prep for Midterm SubjectTest",
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

    ]
};

export default sampleData;