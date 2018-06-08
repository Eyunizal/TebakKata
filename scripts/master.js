// document.getElementById("demo")
// var kata = [];
// var hewanPeliharaan = ['anjing', 'kucing', 'marmut', 'beo'];
// var hewanBuas = ['beruang', 'singa', 'harimau'];
// var warnaPelangi = ['merah','kuning', 'hijau'];
// var balonKu = ['hijau','kuning','kelabu', 'merah muda', 'biru'];
// function testHuruf(){
//     var huruf = '';
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
        },
        {
        jawaban: 'merah',
        hint: 'Warna Api'
        },
        {
        jawaban: 'tom',
        hint: 'Temanya Jerry'
        },
        {
        jawaban: 'ayam',
        hint: 'KFC'
        },
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
var arrayBenar = [];

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
                arrayBenar.push(array[i]);
            }
    }

    // Action Salah
    if (falseCounter === false){
        hurufSalah += inputHuruf;
        jumlahSalah += 1;
        var koleksiSalah = document.getElementById('hurufSalah');
            koleksiSalah.innerHTML = hurufSalah.toUpperCase();
    }

    function kalah(){
        var pesanSalah = document.getElementById('pesan');
            pesanSalah.innerHTML = '<h1 style="color: red">KALAH</h1>';
    }

    function menang(){
        var pesanBenar = document.getElementById('pesan');
            pesanBenar.innerHTML = 'Selamat anda berhasil, silahkan klik tombol Tebak untuk memulai baru';
        var pesanMenang = document.getElementById('pesanMenang');
            pesanMenang.innerHTML = 'HORE!!';    
    }

    function refreshKalah(){
        location.reload();
    }

    // Pemberitahuan Kalah
    if (jumlahSalah === 6){
        kalah();
    }

    // Pemberitahuan Menang
    if (jumlahBenar === jawaban.length){
        menang();
    }
    if (jumlahBenar === jawaban.length + 1){
        refreshKalah();
    }
    
    // Gambar Korban
    if (jumlahSalah === 1){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/1.jpg" alt="Tiang Maut" class="boxauto">';    
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

    if (jumlahSalah === 7){
        refreshKalah();
    }
    
    if (jumlahBenar === jawaban.length){
        document.getElementById('korban').innerHTML = '<img src="assets/gambar/menang.png" alt="Menang">' ;    
    }

    
}

