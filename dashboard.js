// Fungsi untuk menampilkan gambar dalam modal
function showImage(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Fungsi untuk pergi ke halaman rahasia
function goToSecret() {
    window.location.href = 'secret.html';
}

// Menutup modal ketika mengklik di luar gambar
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Menutup modal dengan tombol ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }
});