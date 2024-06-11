// Get the button that opens the modal
var model = document.getElementsById("dropDown");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
