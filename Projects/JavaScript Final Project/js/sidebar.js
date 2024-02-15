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


let sidebarControl=document.getElementById('sidebar-control');
let sidebar=document.getElementById('sidebar');

sidebarControl.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        sidebarControl.innerHTML = 'menu';
    } else {
        sidebarControl.innerHTML = 'more_vert';
    }
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




