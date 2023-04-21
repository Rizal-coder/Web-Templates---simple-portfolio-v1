// event pada saat link diklik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // Tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);
  $("html").animate(
    {
      scrollTop: Math.round(elemenTujuan.offset().top) - 50,
    },
    1250,
    "easeInOutExpo"
  );
  e.preventDefault();
});
