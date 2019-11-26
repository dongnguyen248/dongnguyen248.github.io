var accordion = document.getElementsByClassName('submenu');
for (var i = 0; i < accordion.length; i++) {
    createMenu(accordion[i]);
}

function createMenu(element) {
    var tbn = element.childNodes[0];
    var subMenu = element.childNodes[2];
    tbn.addEventListener('click', function(event) {
        event.preventDefault();
        if (subMenu.style.display == 'none' || subMenu.style.display == '') {
            subMenu.style.display = 'block';
        } else { subMenu.style.display = 'none' }
    })
    tbn.addEventListener('blur', function(event) {
        subMenu.style.display = 'none';
    })
}