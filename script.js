document.addEventListener("DOMContentLoaded", function () {

    const navCollapse = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function(link){
        link.addEventListener("click", function(){

            if(navCollapse.classList.contains("show")){
                bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
            }

        });
    });

});