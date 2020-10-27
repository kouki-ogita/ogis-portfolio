/* jshint curly:true, debug:true */
/* globals $*/

/**
 * -------------------
 * ナビバーのボタン
 * -------------------
 */
 
/*　「Top」ボタン　*/
$('.nav-top').on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600);
});

/*　「About」ボタン　*/
$('.nav-about').on('click', (e) => {
  e.preventDefault();
  const aboutTop = $('#about-wrapper').offset().top;
  $('html, body').animate({ scrollTop: aboutTop }, 600);
});

/*　「Works」ボタン　*/
$('.nav-works').on('click', () =>{
  const worksTop = $('#works-wrapper').offset().top;
  $('html, body').animate({ scrollTop: worksTop }, 600);
});

/*　「Portfolio」ボタン　*/
$('.nav-portfolio').on('click', () =>{
  const portfolioTop = $('#portfolio-wrapper').offset().top;
  $('html, body').animate({ scrollTop: portfolioTop }, 600);
});

/*　「Contact」ボタン　*/
$('.nav-contact').on('click', () =>{
  const contactTop = $('#contact-wrapper').offset().top;
  $('html, body').animate({ scrollTop: contactTop }, 600);
});


/**
 * -------------------
 * 次の項目に進むボタン
 * -------------------
 */

/*　「Who's Me?」ボタン　*/
$('.top-next').on('click', () =>{
  const aboutTop = $('#about-wrapper').offset().top;
  $('html, body').animate({ scrollTop: aboutTop }, 600);
});

/*　「仕事内容へ」ボタン　*/
$('.about-next').on('click', () =>{
  const worksTop = $('#works-wrapper').offset().top;
  $('html, body').animate({ scrollTop: worksTop }, 600);
});

/*　「制作実績を見る」ボタン　*/
$('.works-next').on('click', () =>{
  const portfolioTop = $('#portfolio-wrapper').offset().top;
  $('html, body').animate({ scrollTop: portfolioTop }, 600);
});


/**
 * -------------------
 * トップに戻るボタン
 * -------------------
 */
 
 /*　戻るボタンの表示・非表示　*/
 const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
 };
 
 $(window).on('scroll', updateButton);
 
 /*　押したらトップに戻る　*/
 $('.back-to-top').on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600);
});

updateButton();
