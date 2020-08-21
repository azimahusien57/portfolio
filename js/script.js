//event pada saat link di klik.tanda dolar jquery
$('.page-scroll').on('click',function(e){
//ambil isi haref,dan console itu untu ke arah broser
var tujuan =$(this) . attr('href');

//tangkap element
var elementujuan =$(tujuan);
//pindah scrol dan 70 itu agar bisa semua terlihat dan angka setelah kurawan agar slidnya ada jeda dan atau easeInOutExpo,dr bawa keartas
$('body').animate({
	scrollTop:elementujuan.offset().top-50
},1250,'swing');

e.preventDefault();

});

//parallax tanda doalar jquery untuk scroll

$(window).scroll(function(){
var wScroll = $(this).scrollTop();

//jumbotron
$('.jumbotron img').css({
	'transform': 'translate(0px,'+ wScroll/4 +'%)'
});
$('.jumbotron h1').css({
	'transform': 'translate(0px,'+ wScroll/2+'%)'
});

$('.jumbotron p').css({
	'transform': 'translate(0px,'+ wScroll/1.2+'%)'
 });

// untuk portfolio,dan offset jrak atas bawa dengan top
if(wScroll> $('.portfolio').offset().top-250) {
$('.portfolio.thumbnail').each(function(i){
setTimeout(function(){
console.log('ok');
},2000);
});
}
});

