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

function makeFooterTabActive() {
    document.getElementById("footer-tab").className = "footer-tab-active";
    document.getElementById("footer-tab-inactive").className = "footer-tab-inactive";
};

function makeFooterTabInActive() {
    document.getElementById("footer-tab").className = "footer-tab-inactive";
    document.getElementById("footer-tab-inactive").className = "footer-tab-active";
    document.getElementById("footer-tab*").className += "_active";
};

function avatarClick(){
    $('#user-logo').addClass('animated flip');
};

function saveLogoClick(){
    $('#mainContainer').addClass('animated shake');
};

function leftArrowClick(){
    $('#arror-left').addClass('animated flip');
};
