//// MILESTONE 3: DISPLAYING SHARING PLAYLISTS

function creatingCards(data) {
  //const container = document.querySelector(".playlist-cards");

  const container = document.querySelector(".playlist-cards");
  for (let i = 0; i < data.playlists.length; i++) {
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
    const likesButton = document.createElement("span");
    likes.className = "likes";
    likesButton.innerHTML = "&#x2764";
    likes.textContent = playlist.likeCount;

    // Append elements to card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(creator);
    card.appendChild(likes);
    card.appendChild(likesButton);
    container.appendChild(card);
  }
}
creatingCards(data);
//////////////////////////// MODAL CODE

// Get the button that opens the modal
var modal = document.getElementsByClassName("modal-content")[0];
console.log(modal, "modal");
// add the image variable
var img = document.getElementsByClassName("image-placeholder");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

function openModal(playlist) {
  /**
   * This function opens the modal and populates it with all of the songs
   * and playlist image when someone clicks on one of the titles
   */
  for (let i = 0; i < img.length; i++) {
    console.log("the loop is opened");

    img[i].addEventListener("click", () => {
      modal.style.display = "block";

      // populate the main playlist
      const song = data.playlists[i];
      const mainImage = document.getElementById("main-playlistImage");
      const mainTitle = document.getElementById("main-playlistName");
      const mainCreator = document.getElementsByClassName(
        "main-playlist-creator"
      )[0];

      mainImage.src = song.playlist_art;
      mainTitle.textContent = song.playlist_name;
      mainCreator.textContent = song.playlist_creator;

      // Clear existing sub-playlists
      const subPlaylistsContainer = document.querySelector(".sub-playlists");
      subPlaylistsContainer.innerHTML = "";

      // const song. song in playlist array
      song.songs.forEach((song) => {
        // creating song div
        const subPlaylist = document.createElement("div");
        subPlaylist.className = "sub-playlist";

        // creating image img
        const subImage = document.createElement("img");
        subImage.src = song.cover_art;

        // creating title
        const subTitle = document.createElement("h2");
        subTitle.textContent = song.title;

        // creating duration
        const subDuration = document.createElement("p");
        subDuration.textContent = song.duration;

        // appending it all the the div
        subPlaylist.appendChild(subImage);
        subPlaylist.appendChild(subTitle);
        subPlaylist.appendChild(subDuration);

        // appending the sub-playlist to the sub-playlists container
        subPlaylistsContainer.appendChild(subPlaylist);
      });
    });
  }
}
openModal();

///////////////////////////////////////
