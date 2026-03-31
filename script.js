//Menampilkan navbar di console
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) { 
  link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Navigasi ke: ' +e.target.innerText);

    //membuat highlight
    navLinks.forEach(function(nav){
        nav.classList.remove('active');
      });
      this.classList.add('active');
    });
  });



//Mengubah judul
// const artikel = document.querySelector('.main-article');
const judul = document.querySelector('h1')
judul.innerText = 'AI dan Masa Depan Teknologi Indonesia';

//Memberikan warna pada judul artikel
judul.style.color = '#3b82f6';
console.log('Warna judul berhasil diubah.');

//memberi highlight pada judul
const artikel = document.querySelector('.main-article');

// const judul = document.querySelector('h1');
judul.addEventListener('click', function() {
  artikel.classList.toggle('highlight');
  console.log('highlight sudah terpasang')
});

const paragraphs = document.querySelectorAll('p');
const info = document.querySelector('.meta-info');
let jumlahKata= 0;
let totalKata = 0;
let Estimasi= 0;
paragraphs.forEach(function(p) {
  //menghitung text di paragraf
  jumlahKata += p.innerText +" ";
//menghitung jumlah
  const kata = p.innerText.split(' ');
  totalKata = kata.length;
  console.log('Total kata: ' + totalKata);

//menghitung estimasi waktu
Estimasi= Math.ceil(totalKata/200);
});
//menambahkan kata pada .meta-info
info.innerText += "  | " + "Estimasi: "+Estimasi+ " menit baca";




//filter-kategori
const input = document.querySelector('#filter-kategori');
const items = document.querySelectorAll('.sidebar-widget li');
input.addEventListener('input', function() {
  const keyword = input.value.toLowerCase();
  items.forEach(function(item) {
    const teks = item.innerText.toLowerCase();
    console.log("cari:", keyword, "| Ada di:", teks);
    if (teks.includes(keyword)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }  
  });
});





