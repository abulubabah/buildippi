// Saat pengguna menggulir ke bawah 25px dari bagian atas dokumen, tunjukkan tombolnya
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}