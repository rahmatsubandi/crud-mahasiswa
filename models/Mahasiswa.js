const mongoose = require("mongoose");

// Membuat variabel baru dengan nama mahasiswaScheme
const mahasiswaScheme = new mongoose.Schema({
  nama: {
    // Membuat type dari field nama yang berada di tabel mahasiswa bersifat string
    type: String,
    // maksud dari required adalah ketika data disimpan kedalam database, data tidak boleh kosong
    required: true,
  },
  nim: {
    // Membuat type dari field nama yang berada di tabel mahasiswa bersifat number
    type: Number,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

// lalu mengekspor model dari mahasiswa, tujuan mengekspor ini supaya model dari mahasiswa ini bisa digunakan dimana saja atau reusable
module.exports = mongoose.model("Mahasiswa", mahasiswaScheme);
