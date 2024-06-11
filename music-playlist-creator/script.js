//////////////////////////// MODAL CODE

// buttons to press to get the modal
var openingButton = document.querySelector(".playlist-card");

function openModal() {}

// Get the button that opens the modal
var model = document.getElementById("dropDown");

// Get the <span> element that closes the modal
var span = document.getElementByClassName("close")[0];

function openModel(playlist) {
  document.getElementById("playlistName").innerText = playlist.name;
  document.getElementById("playlistImage").src = festival.imageUrl;

  // When the user clicks on the button, open the modal
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
///////////////////////////////////////

//// MILESTONE 3: DISPLAYING SHARING PLAYLISTS

const container = document.querySelector(".playlist-cards");
container.innerHTML = ""; //clear any existing content

function creatingCards(data) {
  for (let i = 0; i < data.playlists.length; i++) {
    // each playlist
    const playlist = data.playlists[i];

    // creating image
    const image = document.getElementByClassName("image-placeholder");
    image.textContent += "${playlist.playlist_art}";

    // creating title
    const title = document.getElementByClassName("playlist-title");
    title.textContent += "${playlist.playlist_name}";

    // creating creator tag
    const creator = document.getElementByClassName("playlist-creator");
    creator.textContent += "${playlist.playlist_creator}";

    // creating likes
    const likes = document.getElementByClassName("likes");
    likes.textContent += "${playlist.likeCount}";
  }
}

creatingCards(data);
