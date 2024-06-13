document.addEventListener("DOMContentLoaded", () => {
    // Function to display a random playlist on the featured page
    function displayRandomPlaylist() {
      const randomPlaylist = data.playlists[Math.floor(Math.random() * data.playlists.length)];
  
      const mainImage = document.getElementById("main-playlistImage");
      const mainTitle = document.getElementById("main-playlistName");
      const mainCreator = document.querySelector(".main-playlist-creator");
  
      mainImage.src = randomPlaylist.playlist_art;
      mainTitle.textContent = randomPlaylist.playlist_name;
      mainCreator.textContent = randomPlaylist.playlist_creator;
  
      const subPlaylistsContainer = document.querySelector(".sub-playlists");
      subPlaylistsContainer.innerHTML = "";
  
      randomPlaylist.songs.forEach(song => {
        const subPlaylist = document.createElement("div");
        subPlaylist.className = "sub-playlist";
  
        const subImage = document.createElement("img");
        subImage.src = song.cover_art;
        subImage.className = "image-placeholder";
  
        const subTitle = document.createElement("h2");
        subTitle.textContent = song.title;
  
        const subDuration = document.createElement("p");
        subDuration.textContent = song.duration;
  
        subPlaylist.appendChild(subImage);
        subPlaylist.appendChild(subTitle);
        subPlaylist.appendChild(subDuration);
  
        subPlaylistsContainer.appendChild(subPlaylist);
      });
  
      // Adding click event to open modal
      mainImage.addEventListener("click", () => openModal(randomPlaylist));
    }
  
    // Function to open modal and display playlist details
    function openModal(playlist) {
      const modal = document.getElementById("myModal");
      const modalContent = document.getElementById("modal-playlist-details");
      const span = document.getElementsByClassName("close")[0];
  
      modal.style.display = "block";
      modalContent.innerHTML = `
        <img src="${playlist.playlist_art}" />
        <h2>${playlist.playlist_name}</h2>
        <p>${playlist.playlist_creator}</p>
      `;
  
      playlist.songs.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.className = "modal-song";
        songDiv.innerHTML = `
          <img src="${song.cover_art}" />
          <h3>${song.title}</h3>
          <p>${song.duration}</p>
        `;
        modalContent.appendChild(songDiv);
      });
  
      // Close the modal when the user clicks on <span> (x)
      span.onclick = function () {
        modal.style.display = "none";
      };
  
      // Close the modal when the user clicks anywhere outside of the modal
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  
    // Call the function to display a random playlist on page load
    displayRandomPlaylist();
  });
  