var silederIndex;
var sileders = document.getElementsByClassName('pictureSlide');
// console.log(sileder);
var dots = document.getElementsByClassName('dot');


function showSilder() {
    for (var i = 0; i < sileders.length; i++) {
        var sileder = sileders[i];
        sileder.style.display = 'none';

    }
    for (var i = 0; i < dots.length; i++) {
        var dot = dots[i];
        // dot.style.display = 'none';

        dot.className = dot.className.replace(" active", "");
        // console.log(dot.className);
    }
    // 
    sileders[silederIndex].style.display = 'block';
    console.log(sileders[silederIndex])
    dots[silederIndex].className += " active";
    silederIndex++;


    if (silederIndex > sileders.length - 1) {
        silederIndex = 0;
    }
    setTimeout(showSilder, 2000);

}
showSilder(silederIndex = 0);

function currentSlide(n) {
    showSilder(showSilder = n);
}