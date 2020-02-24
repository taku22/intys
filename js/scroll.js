function changeColor() {
  var nowScrollY = window.scrollY + 70;
  
  var body = document.getElementById('scroll');
  var section01Top = $('#scroll-color01').offset().top;
  var section02Top = $('#scroll-color02').offset().top;
  var section03Top = $('#scroll-color03').offset().top;
  var section04Top = $('#scroll-color04').offset().top;

  if (nowScrollY < section02Top){
    body.classList.remove('bg-is-servise','bg-is-works','bg-is-blog','bg-is-contact');
    body.classList.add('bg-is-servise');
  }else if (nowScrollY < section03Top){
    body.classList.remove('bg-is-servise','bg-is-works','bg-is-blog','bg-is-contact');
    body.classList.add('bg-is-works');
  }else if(nowScrollY < section04Top){
    body.classList.remove('bg-is-servise','bg-is-works','bg-is-blog','bg-is-contact');
    body.classList.add('bg-is-blog');
  }else{
    body.classList.remove('bg-is-servise','bg-is-works','bg-is-blog','bg-is-contact');
    body.classList.add('bg-is-contact');
  }
}

//window.addEventListener('scroll', changeColor);
