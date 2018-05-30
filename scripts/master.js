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

var soal = [{
    jawaban: 'Hijau',
    hint: 'Meletus Balon'
    },
    {
    jawaban: 'Kancil',
    hint: 'Hewan Nakal'
    },
    {
    jawaban: 'Singa',
    hint: 'Raja Hutan'
    }
];


function init(){
    var acak = Math.floor(Math.random() * soal.length);
    var jawaban = '';
    var hint = '';
    for (var i = 0; i< soal.length; i++){
        if (acak === i){
            jawaban = soal[i]['jawaban'];
            hint = soal[i]['hint'];
        }
    }

    var boxKata = document.getElementById('boxKata');
    for (var j = 0; j < jawaban.length; j++){
        var divHuruf = document.createElement('div');
            divHuruf.id = 'baris-' + j;
            divHuruf.className = 'box';
        boxKata.appendChild(divHuruf);
    }
    
}
init()
   