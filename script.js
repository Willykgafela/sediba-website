console.log("Sediba Sa Bophelo site loaded.");

// Open lightbox
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-img').alt = img.alt;
}

// Close lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox on background click
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});
