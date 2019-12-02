var accordion = document.getElementsByClassName('accordion');
for (var i = 0; i < accordion.length; i++) {
    createMenu(accordion[i]);

}

function createMenu(element) {
    var tbn = element.childNodes[0];
    console.log(tbn);
    var subMenu = element.childNodes[2];

    tbn.addEventListener('click', function(event) {
        event.preventDefault();
        if (subMenu.style.maxHeight == '0px' || subMenu.style.maxHeight == '') {
            subMenu.style.maxHeight = '10em';
        } else { subMenu.style.maxHeight = '0px' }


    });
    tbn.addEventListener('blur', () => { subMenu.style.maxHeight = '0px'; });

    // console.log(tbn.addEventListener)
}