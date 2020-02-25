function changeColor() {
  var nowScrollY = window.scrollY + 70;

  var body = document.getElementById('scroll');
  var section01Top = $('#scroll-color01').offset().top;
  var section02Top = $('#scroll-color02').offset().top;
  var section03Top = $('#scroll-color03').offset().top;
  var section04Top = $('#scroll-color04').offset().top;

  if (nowScrollY < section02Top) {
    body.classList.remove('bg-is-servise', 'bg-is-works', 'bg-is-blog', 'bg-is-contact');
    body.classList.add('bg-is-servise');
  }
  else if (nowScrollY < section03Top) {
    body.classList.remove('bg-is-servise', 'bg-is-works', 'bg-is-blog', 'bg-is-contact');
    body.classList.add('bg-is-works');
  }
  else if (nowScrollY < section04Top) {
    body.classList.remove('bg-is-servise', 'bg-is-works', 'bg-is-blog', 'bg-is-contact');
    body.classList.add('bg-is-blog');
  }
  else {
    body.classList.remove('bg-is-servise', 'bg-is-works', 'bg-is-blog', 'bg-is-contact');
    body.classList.add('bg-is-contact');
  }
}

//window.addEventListener('scroll', changeColor);

function fadeIn() {
  var nowScrollY = window.scrollY;
  var sectionTitle01 = document.getElementById('section-title01');
  var sectionTitle02 = document.getElementById('section-title02');
  var sectionTitle03 = document.getElementById('section-title03');
  var sectionTitle04 = document.getElementById('section-title04');
  
  var serviseBox01 = document.getElementById('service-box01');
  var serviseBox02 = document.getElementById('service-box02');
  var serviseBox03 = document.getElementById('service-box03');


  var section01Top = $('#scroll-color01').offset().top;
  var section02Top = $('#scroll-color02').offset().top;
  var section03Top = $('#scroll-color03').offset().top;
  var section04Top = $('#scroll-color04').offset().top;


  if (nowScrollY < section01Top -50) {
    sectionTitle01.classList.remove('hide-section-title');
    serviseBox01.classList.remove('hide-section-title');
    serviseBox01.classList.add('fade-in-from-bottom');
    serviseBox02.classList.remove('hide-section-title');
    serviseBox02.classList.add('fade-in-from-bottom');
    serviseBox03.classList.remove('hide-section-title');
    serviseBox03.classList.add('fade-in-from-bottom');
    sectionTitle01.classList.add('fade-in');
    
  }
  else if (nowScrollY < section02Top) {
    sectionTitle02.classList.remove('hide-section-title');
    sectionTitle02.classList.add('fade-in');
  }
  else if (nowScrollY < section03Top) {
    sectionTitle03.classList.remove('hide-section-title');
    sectionTitle03.classList.add('fade-in');
  }
  else if (nowScrollY < section04Top) {
    sectionTitle04.classList.remove('hide-section-title');
    sectionTitle04.classList.add('fade-in');
  }
}

window.addEventListener('scroll', fadeIn);