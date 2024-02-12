let sidebarrotate = document.getElementById('sidebar');
let expandIcon = document.getElementById('expandIcon');
let listItems = document.querySelectorAll('.li-item');

expandIcon.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
});

listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
});



document.getElementById('sidebar-control').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('collapsed');

});

document.addEventListener("DOMContentLoaded", function () {
    var liItems = document.querySelectorAll(".li-item");

  
    liItems.forEach(function(item) {
        item.addEventListener("click", function () {
            var dropdown = item.querySelector(".side-dropdown");
            if (dropdown) {
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "block";
                }
            }
        });
    });
});


/*
document.getElementById('sidebar-control').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');

    var menuIcon = document.getElementById('menu-icon');
    var seeMoreIcon = document.getElementById('sidebar-control');

    menuIcon.classList.toggle('collapsed');
    seeMoreIcon.classList.toggle('collapsed');
});
*/

