//////////////////////////// MODAL CODE

// Get the button that opens the modal
var modal = document.getElementsByClassName("modal")[0];

// add the image variable
var img = document.getElementsByClassName("image-placeholder");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//function openModal(playlist) {
//  document.getElementById("sub-playlist").innerText = playlist.name;
//  document.getElementById("playlistImage").src = playlist.imageUrl;

// When the user clicks on the button, open the modal
//  modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  console.log("I closed the function");
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  console.log("I opened the modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

for (let i = 0; i < img.length; i++) {
  console.log("the loop is opened");
  img[i].addEventListener("click", () => {
    modal.style.display = "block";
  });
}

span.addEventListener("click", () => {
  console.log("the second way to open");
  modal.style.display = "none";
});

///////////////////////////////////////

//// MILESTONE 3: DISPLAYING SHARING PLAYLISTS

function creatingCards(data) {
  //const container = document.querySelector(".playlist-cards");

  for (let i = 0; i < data.playlists.length; i++) {
    const container = document.querySelector(".playlist-cards");
    // each playlist
    const playlist = data.playlists[i];

    // creating card
    const card = document.createElement("div");
    console.log("Card prints");
    card.className = "playlist-card"; //adding a Name to the class

    // creating image
    const image = document.createElement("img");
    console.log("the image prints");
    image.className = "image-placeholder";
    image.src = playlist.playlist_art;

    // creating title
    const title = document.createElement("h2");
    console.log("the title prints");
    title.className = "playlist-title";
    title.textContent = playlist.playlist_name;

    // creating creator tag
    const creator = document.createElement("p");
    console.log("the creator prints");
    creator.className = "playlist-creator";
    creator.textContent = playlist.playlist_creator;

    // creating likes
    const likes = document.createElement("div");
    likes.className = "likes";

    // Append elements to card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(creator);
    card.appendChild(likes);
    container.appendChild(card);
  }
}

creatingCards(data);
