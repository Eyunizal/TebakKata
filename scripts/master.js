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
var inputHuruf = '';
var hurufSalah = '';

var acakSoal = Math.floor(Math.random() * bankSoal.length);
var jawaban = '';
var hint = '';
    
    var array= [];
    for (var i = 0; i< bankSoal.length; i++){
        if (acakSoal === i){
            jawaban = bankSoal[i]['jawaban'];
            hint = bankSoal[i]['hint'];
            // console.log(jawaban);
            for (var j = 0; j < jawaban.length; j++){
                array.push(jawaban[j]);
            }
        }
    }


function init(){ 
    var boxKata = document.getElementById('kataRahasia');
    for (var i = 0; i < jawaban.length; i++){
        var kotakHuruf = document.createElement('div');
            kotakHuruf.id = 'huruf' + i;
            kotakHuruf.className = 'box';
        boxKata.appendChild(kotakHuruf);
    }
    document.getElementById('hintRahasia').innerHTML = 'Hint: ' + hint;
}
init();

function klikTebak(){
    inputHuruf = document.getElementById('huruf').value;
    for (var i = 0; i < array.length; i++){
        if (inputHuruf === array[i]){
            var showHuruf = document.getElementById('huruf'+i);
            showHuruf.innerHTML = array[i];
        }else if (inputHuruf != array[i]){
            // console.log(hurufSalah);
            // console.log(inputHuruf);
            hurufSalah = hurufSalah + inputHuruf;
            var koleksiSalah = document.getElementById('hurufSalah');
                koleksiSalah.innerHTML = hurufSalah;
        }
    }
}


