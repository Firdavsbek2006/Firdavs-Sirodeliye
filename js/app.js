var aHref = document.querySelector(".l-link");
        var closeBtn = document.querySelector(".close-icon");
        var sidebar = document.querySelector(".sidebar-wrapper");

        aHref.onclick = () => sidebar.style.display = "block"
        closeBtn.onclick = () => sidebar.style.display = "none"