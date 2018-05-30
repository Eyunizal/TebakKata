// document.getElementById("demo")
// var kata = [];
// var hewanPeliharaan = ['anjing', 'kucing', 'marmut', 'beo'];
// var hewanBuas = ['beruang', 'singa', 'harimau'];
// var warnaPelangi = ['merah','kuning', 'hijau'];
// var balonKu = ['hijau','kuning','kelabu', 'merah muda', 'biru'];
// function testHuruf(){
//     var huruf = '';
// }
        
var boxKata = document.getElementById('boxKata');
var jumlahHuruf = 5; // ganti dengan index dari array kata yang di pertanyakan
for (var i = 0; i < jumlahHuruf; i++){
    var divHuruf = document.createElement('div');
    divHuruf.id = 'baris-' + i;
    divHuruf.className = 'box';
    boxKata.appendChild(divHuruf);
}

var balonKu = ['hijau','kuning','kelabu', 'merah muda', 'biru'];


        function acakKata(min, max){
            var acak = Math.floor(Math.random() * balonku.length);
            return acak
        }
