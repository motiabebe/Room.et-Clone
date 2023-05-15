// array of objects
const rooms = [
    {
        name: "Kefetew Guest House",
        image: "https://roomet.fra1.digitaloceanspaces.com/4aaf060627a4d9bf8dcdd034a662d891",
        location: "Addis Ababa",
        price: 100,
        rating: 4,
    },
    {
        name: "Darrik Guest House",
        image: "https://roomet.fra1.digitaloceanspaces.com/4fcdaeab1fcfa83c8dcd64fa43c6e796",
        location: "Addis Ababa",
        price: 150,
        rating: 3,
    },
    {
        name: "Gambela Hotel",
        image: "https://api.room.et/image/webp/3a8411b205720647bb296614b47b30bf",
        location: "Gambela",
        price: 200,
        rating: 5,
    },
    {
        name: "Abat Guest House",
        image: "https://roomet.fra1.digitaloceanspaces.com/b3426235cce0c1e9447266ffd1df457e",
        location: "Addis Ababa",
        price: 100,
        rating: 4,
    },
    {
        name: "Rich Pension",
        image: "https://api.room.et/image/webp/81a3dce5366327c64b96d9c4289e5647",
        location: "Addis Ababa",
        price: 100,
        rating: 3,
    },
    {
        name: "Saden Hotel",
        image: "https://api.room.et/image/webp/013a6ed6bd27c210f68e913222b92f39",
        location: "Addis Ababa",
        price: 100,
        rating: 3,
    },
    {
        name: "Nahome Pension",
        image: "https://api.room.et/image/webp/35b495420d575dc87636bdea86c3d83e",
        location: "Addis Ababa",
        price: 100,
        rating: 5,
    },
    {
        name: "Goza Guest House",
        image: "https://api.room.et/image/webp/83d1fffca84c78b008bb8fa63a536127",
        location: "Addis Ababa",
        price: 100,
        rating: 4.5,
    },
]

// get the div with id of rooms
const roomsDiv = document.getElementById("rooms");

// print the rooms
rooms.forEach((room) => {
    roomsDiv.innerHTML += `
    <div class="room">
        <div class="room-img">
            <img src="${room.image}" width="250" height="170" class="img-fit">
        </div>
        <div class="room-data">
            <p>📍${room.location}</p>
            <p><b>${room.name}</b></p>
            <p>${room.price} ETB/Night</p>
                <div class="rating">
                    <span>${"★".repeat(room.rating)}</span>
                    <span>(${room.rating})</span>
                    </div>
        </div>
    </div>`

    // append the room to the rooms div
    // roomsDiv.appendChild(roomsDiv);

}   )

