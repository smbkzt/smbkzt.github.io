var dropdown = document.querySelectorAll('.dropdown-list'),
    dropdownArray = Array.prototype.slice.call(dropdown, 0);

dropdownArray.forEach(function(el) {
    var button = el.querySelector('a[dropdown-prop="title"]'),
        menu   = el.querySelector('.dropdown-list-items'),
        icon   = button.querySelector('i.dropdown-icon'),

        toggleDropdown = function() {
            classie.toggleClass(menu, 'dropdown-list-open');
            classie.toggleClass(icon, 'dropdown-icon-open');
        };

    button.addEventListener('click', toggleDropdown);
});

// Footer tabs
function deactivateAllTablinks(evt){
    tablinks = document.getElementsByClassName("footer-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" _active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " _active";
}

function makeFooterTabActive(evt) {
    document.getElementById("footer-tab-active-id").className = "footer-tab-active";
    document.getElementById("footer-tab-inactive-id").className = "footer-tab-inactive";
    deactivateAllTablinks(evt);
};

function makeFooterTabInActive(evt) {
    document.getElementById("footer-tab-active-id").className = "footer-tab-inactive";
    document.getElementById("footer-tab-inactive-id").className = "footer-tab-active";
    deactivateAllTablinks(evt);
};

// End footer Tabs
// Animate css
function avatarClick(){
    $('#user-logo').addClass('animated flip');
};

function saveLogoClick(){
    $('#mainContainer').addClass('animated shake');
};

function leftArrowClick(){
    $('#arror-left').addClass('animated flip');
};
// End Animate css
