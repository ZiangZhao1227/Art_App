function openModal_new() {
    document.getElementById("myModal_new").style.display = "block";
  }
  
function closeModal_new() {
    document.getElementById("myModal_new").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides_new(slideIndex);
  
  function plusSlides_new(n) {
    showSlides_new(slideIndex += n);
  }
  
  function currentSlide_new(n) {
    showSlides_new(slideIndex = n);
  }
  
  function showSlides_new(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_new");
    var dots = document.getElementsByClassName("demo1");
    var captionText = document.getElementById("caption_new");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


  function openForm_new() {
    document.getElementById("myForm1").style.display = "block";
  }
  
  function closeForm_new() {
    document.getElementById("myForm1").style.display = "none";
  }
  