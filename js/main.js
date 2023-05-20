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
]

const destinations = [
    {
        name: "Addis Ababa",
        // get image from of the city from unsplash
        image: "https://roomet.fra1.digitaloceanspaces.com/f4329f7b04336b9bfebfa4f4863672d2",

    },
    {
        name: "Jimma",
        // get image from of the city from unsplash
        image: "https://roomet.fra1.digitaloceanspaces.com/0c443e4943c84a3c79f19f57ea413da4",
    },
    {
        name: "BahirDar",
        // get image from of the city from unsplash
        image: "https://roomet.fra1.digitaloceanspaces.com/e3b7db8fa33f6ae28ef1bbb53cb15a39",
    },
    {
        name: "Arba Minch",
        // get image from of the city from unsplash
        image: "https://roomet.fra1.digitaloceanspaces.com/1aac3a734bd00d00bfb9da7fba90aa0f",
    },
    {
        name: "Assela",
        // get image from of the city from unsplash
        image: "https://api.room.et/image/webp/90e4ee80143815324fd8bb28ee06a807",
    }]


// navabar
const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav class="">
        <div class="flex">
            <h3><a href="index.html">Room.et</a></h3> 
            <input type="text" name="" id="" placeholder="Search for a city or particular hotel">
        </div>
        <div class="flex">
            <ul class="flex flex-space-even">
                <li><a href="index.html">Home</a></li>
                <li><a href="explore.html">Explore</a></li>
            </ul>
            <ul class="flex">
                <li><a href="signin.html">Sign in</a></li>
                <button class=""><a href="signup.html">Sign up</a></button>
            </ul>
        </div>
    </nav>`
// end of navabar


    









