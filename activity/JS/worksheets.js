const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        menu.classList.add("submenu-active");
        item.classList.add("show-submenu");
        menuItems.forEach((item2, index2) => {
            if (index !== index2){
                item2.classList.remove("show-submenu")
            }
        });
    });
});

subMenuTitles.forEach((title) => {
    title.addEventListener("click", () => {
        menu.classList.remove("submenu-active");
    });
});
function resizeIframe() {
    var iframe = document.getElementById('myIframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
};
const menuItemst = document.querySelectorAll('.menu-item [data-file]');

menuItemst.forEach(item => {
    item.addEventListener('click', function() {
        const fileName = this.getAttribute('data-file');
        
        document.getElementById('myIframe').src = fileName;
    });
});

console.log(menuItems, subMenuTitles);