// Sélection des éléments
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Quand on clique sur le hamburger
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// page 1



// Affiche/masque les informations supplémentaires
// const btn = document.getElementById('moreBtn');
// const extra = document.getElementById('extraInfo');

// btn.addEventListener('click', () => {
//   if (extra.style.display === 'block') {
//     extra.style.display = 'none';
//     btn.textContent = 'Voir plus d\'informations';
//   } else {
//     extra.style.display = 'block';
//     btn.textContent = 'Voir moins';
//   }
// });

// // Effet scroll pour apparition fluide
// window.addEventListener('scroll', () => {
//   const elements = document.querySelectorAll('.spec');
//   elements.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//       el.style.opacity = 1;
//       el.style.transform = 'translateY(0)';
//     }
//   });
// });



// Bouton retour en haut
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animation simple des boutons Rent/Buy
const buttons = document.querySelectorAll('.hero-buttons .btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


// section services 
// Effet simple sur le bouton "View Offers"
document.querySelector('.offers-btn').addEventListener('click', () => {
  alert('Redirecting to offers page...');
});



// colection
// Petit effet sur le bouton lors du clic
document.querySelectorAll('.offer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Loading...';
    setTimeout(() => {
      btn.textContent = 'View Offer';
      alert('Offer details would open here!');
    }, 1000);
  });
});




// Simple effet sur le bouton
document.querySelector('.list-btn').addEventListener('click', () => {
  alert("Redirecting to your car listing page...");
});



// scetion for end 
// Animation simple au survol
document.querySelectorAll('.doc-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
  });
});



// Exemple : bouton "favori" qui change d’état
const favButton = document.querySelector(".favorite");

favButton.addEventListener("click", () => {
  favButton.classList.toggle("active");
  const icon = favButton.querySelector("i");
  if (favButton.classList.contains("active")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
});


// page pro  2


const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.side-photos img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Changement de l'image principale
thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;
  });
});

// Ouvrir le zoom (lightbox)
[mainImage, ...thumbnails].forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

// Fermer le zoom
closeBtn.addEventListener('click', () => {
  lightbox.style.display = "none";
});

// Fermer si clic en dehors
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});





// page pro
const exploreButtons = document.querySelectorAll('.explore-btn');

exploreButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Car details coming soon...');
  });
});





// Sélectionner tous les boutons "View Offer"
const offerButtons = document.querySelectorAll('.offer-btn');

offerButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log("Cette voiture est déjà disponible");

    // Change le texte du bouton
    const originalText = btn.textContent;
    btn.textContent = "Chargement...";
    btn.disabled = true; // désactive temporairement le bouton

    // Après 2 secondes, on remet le texte initial
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  });
});



















// ===== AFFICHER / CACHER LA SECTION DE PAIEMENT =====
const rentBtn = document.getElementById("erc-rent-btn");
const paymentSection = document.getElementById("erc-payment");
const closePayment = document.getElementById("erc-close-payment");

rentBtn.addEventListener("click", () => {
  paymentSection.classList.add("active");
  paymentSection.classList.remove("hidden");
});

closePayment.addEventListener("click", () => {
  paymentSection.classList.remove("active");
  setTimeout(() => paymentSection.classList.add("hidden"), 400);
});

// (Optionnel) Bloquer le scroll quand la fenêtre de paiement est ouverte
paymentSection.addEventListener("transitionstart", () => {
  if (paymentSection.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});


// payement js
// Changement de méthode de paiement
const payOptions = document.querySelectorAll(".pay-option");
const forms = document.querySelectorAll(".pay-form");

payOptions.forEach(option => {
  option.addEventListener("click", () => {
    payOptions.forEach(btn => btn.classList.remove("active"));
    option.classList.add("active");

    const target = option.dataset.method;
    forms.forEach(form => form.classList.remove("active-form"));
    document.getElementById(target).classList.add("active-form");
  });
});

// Simulation de paiement réussi
const payButtons = document.querySelectorAll(".pay-btn");
const successModal = document.querySelector(".pay-success");

payButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    successModal.classList.add("active");
  });
});



  // ⏳ Affiche le site après 5 secondes
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.visibility = "hidden";
        document.getElementById("mainSite").classList.add("site-visible");
      }, 5000);
    });

