// document.getElementById("demo")
// var kata = [];
// var hewanPeliharaan = ['anjing', 'kucing', 'marmut', 'beo'];
// var hewanBuas = ['beruang', 'singa', 'harimau'];
// var warnaPelangi = ['merah','kuning', 'hijau'];
// var balonKu = ['hijau','kuning','kelabu', 'merah muda', 'biru'];
// function testHuruf(){
//     var huruf = '';
// }
        
// var boxKata = document.getElementById('boxKata');
// var jumlahHuruf = 5; // ganti dengan index dari array kata yang di pertanyakan
// for (var i = 0; i < jumlahHuruf; i++){
//     var divHuruf = document.createElement('div');
//     divHuruf.id = 'baris-' + i;
//     divHuruf.className = 'box';
//     boxKata.appendChild(divHuruf);
// }

// ============= List variable ================
// Variable soal
var bankSoal = [{
    jawaban: 'hijau',
    hint: 'Meletus Balon'
    },
    {
    jawaban: 'kancil',
    hint: 'Hewan Nakal'
    },
    {
    jawaban: 'singa',
    hint: 'Raja Hutan'
    }
];
// Variable logika
var inputHuruf = '';
var hurufSalah = '';
var jumlahSalah = 0;
var jumlahBenar = 0;
var acakSoal = Math.floor(Math.random() * bankSoal.length);
var jawaban = '';
var hint = '';    
var array= [];

// =================== Logika ===================
// Acak Soal
for (var i = 0; i< bankSoal.length; i++){
    if (acakSoal === i){
        jawaban = bankSoal[i]['jawaban'];
        hint = bankSoal[i]['hint'];
        for (var j = 0; j < jawaban.length; j++){
            array.push(jawaban[j]);
        }
    }
}

if (jumlahSalah === 0){
    document.getElementById('korban').innerHTML = '<img src="assets/gambar/awal.jpg" alt="Alas Maut">' ;    
}

// Memunculkan Soal
function init(){ 
    var boxKata = document.getElementById('kataRahasia');
    for (var i = 0; i < jawaban.length; i++){
        var kotakHuruf = document.createElement('div');
            kotakHuruf.id = 'huruf' + i;
            kotakHuruf.className = 'box';
        boxKata.appendChild(kotakHuruf);
    }
    document.getElementById('hintRahasia').innerHTML = 'Hint:' + hint;
}
init();

// Proses jawab
function klikTebak(){
    inputHuruf = document.getElementById('huruf').value;
    var falseCounter = false
    
    // Action benar
    for (var i = 0; i < array.length; i++){
        if (inputHuruf === array[i]){
            var showHuruf = document.getElementById('huruf' + i);
                showHuruf.innerHTML = array[i].toUpperCase();
            falseCounter = true;
            jumlahBenar += 1;
        }
    }
    
    // Action Salah
    if (falseCounter === false){
        hurufSalah += inputHuruf;
        jumlahSalah += 1;
        var koleksiSalah = document.getElementById('hurufSalah');
            koleksiSalah.innerHTML = hurufSalah.toUpperCase();
    }

    // Pemberitahuan Kalah
    if (jumlahSalah === 6){
        document.getElementById('pesan').innerHTML = '<h2 style="color: red">Kesalahan anda telah memakan korban</h2>';
    }

    // Pemberitahuan Menang
    if (jumlahBenar === jawaban.length){
        document.getElementById('pesan').innerHTML = 'Selamat anda berhasil, silahkan refresh untuk mengulang';
    }
    
    // Gambar Korban
    if (jumlahSalah === 1){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/1.jpg" alt="Tiang Maut">';    
    }
    if (jumlahSalah === 2){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/2.jpg" alt="Tiang Maut Dengan Gantungan">';
    }
    if (jumlahSalah === 3){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/3.jpg" alt="Kepala Menggantung">';
    }
    if (jumlahSalah === 4){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/4.jpg" alt="Kepala Badan">';
    }
    if (jumlahSalah === 5){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/5.jpg" alt="Tubuh Tanpa Kaki">';
    }
    if (jumlahSalah === 6){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/6.jpg" alt="Tiada">';
    }
}



