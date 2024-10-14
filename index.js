function provjeraLozinke() {
    const tacnaLozinka = "30.10.2021."; // Ovde postaviš tačnu lozinku
    const vrijednost = document.getElementById("password").value;
    const errorPoruka = document.getElementById("error-poruka");
    const conten = document.getElementById("content");
    const lozinka = document.getElementById("lozinka");

    // Proverava da li je uneta lozinka tačna
    if (vrijednost === tacnaLozinka) {
      lozinka.style.display = "none"; // Sakriva unos lozinke
      conten.style.display = "block"; // Prikazuje sadržaj
      errorPoruka.textContent = ""; // Brisanje eventualnih grešaka
    } else {
      errorPoruka.textContent = "Pogrešna lozinka, pokušajte ponovo.";
    }
  }

  const modal = document.getElementById("modal");
  const otvoriModal = document.getElementById("otvoriModal");
  const zatvoriModal = document.getElementById("zatvoriModal");

  otvoriModal.onclick = function() {
    modal.style.display = "flex"; 
  }

 
  zatvoriModal.onclick = function() {
    modal.style.display = "none"; 
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; 
    }
  }

var videos = document.querySelectorAll(".myvideo");
videos.forEach(function(video) {
    video.addEventListener("click", function() {
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Get modal elements
var travelModal = document.getElementById("travelModal");
var galleryModal = document.getElementById("galleryModal");

// Get button elements
var travelBtn = document.getElementById("travelBtn");
var galleryBtn = document.getElementById("galleryBtn");

// Get close elements
var closeTravel = document.getElementById("closeTravel");
var closeGallery = document.getElementById("closeGallery");

// Open travel modal
travelBtn.onclick = function() {
    travelModal.style.display = "block";
}

// Open gallery modal
galleryBtn.onclick = function() {
    galleryModal.style.display = "block";
}

// Close travel modal
closeTravel.onclick = function() {
    travelModal.style.display = "none";
}

// Close gallery modal
closeGallery.onclick = function() {
    galleryModal.style.display = "none";
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == travelModal) {
        travelModal.style.display = "none";
    }
    if (event.target == galleryModal) {
        galleryModal.style.display = "none";
    }
}