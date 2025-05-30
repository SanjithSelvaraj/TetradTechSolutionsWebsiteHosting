document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navBar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navBar-placeholder").innerHTML = data;

            // 💡 Attach navOpen function here since HTML is now loaded
            window.navOpen = function () {
                const menu = document.querySelector('.menu-container');
                menu.classList.toggle('active');
                document.documentElement.classList.toggle('overflow-y-hidden');
            };

            // 💡 Responsive logo based on screen width
            const logo = document.getElementById("responsive-logo");
            if (logo) {
                const width = window.innerWidth;
                if (width >= 1024) {
                    logo.src = "public/icons/tdt-logo-large.svg";
                } else if (width >= 768) {
                    logo.src = "public/icons/tdt-logo-medium.svg";
                } else {
                    logo.src = "public/icons/tdt-logo-small.svg";
                }
            }
            const navOpenLogo = document.getElementById("responsive-logo-2");
            if (navOpenLogo) {
                const width = window.innerWidth;
                if (width >= 1024) {
                    navOpenLogo.src = "public/icons/tdt-logo-large.svg";
                } else if (width >= 768) {
                    navOpenLogo.src = "public/icons/tdt-logo-medium.svg";
                } else {
                    navOpenLogo.src = "public/icons/tdt-logo-small.svg";
                }
            }
        });
});
