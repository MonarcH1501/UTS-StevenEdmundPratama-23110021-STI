// Menangkap event submit pada formulir
document.querySelector('form').addEventListener('submit', function(event) {
  // Mencegah pengiriman formulir secara default
  event.preventDefault();

  // Mengambil nilai dari input nama, email, dan barang
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const barang = document.getElementById('barang').value;

  // Menampilkan notifikasi dengan alert
  alert(`Thank you ${nama}! Had Ordered ${barang}. Check mail at ${email} for service confirmation`);
});
