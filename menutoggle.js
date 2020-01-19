var navMenuToggle = document.querySelector('.nav_menu_toggle');
var navMenuLinks = document.querySelectorAll('.nav_menu_link');




           navMenuToggle.addEventListener('click', function() {
            for(var i = 0; i < navMenuLinks.length; i++) {
                navMenuLink = navMenuLinks[i];
                navMenuLink.classList.toggle('show');
            }
         });
         