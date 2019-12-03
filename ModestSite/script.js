var slideIndex;
var sliders = document.getElementsByClassName("slider");
var dots = document.getElementsByClassName("dot");
console.log(dots)
console.log(sliders)

function sliderShow() {
    for (var i = 0; i < sliders.length; i++) {
        var slider = sliders[i];
        slider.style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        var dot = dots[i];
        dot.className = dot.className.replace(" active");
    }
    sliders[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    console.log(slideIndex)
    slideIndex++;

    if (slideIndex > sliders.length - 1) {
        slideIndex = 0;
    }
    setTimeout(sliderShow, 3000);
}
sliderShow(slideIndex = 0);