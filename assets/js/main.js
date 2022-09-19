const navItems = document.querySelector('.nav-items');
const openNavBtn = document.querySelector('#open_menu');
const closeNavBtn = document.querySelector('#close_menu');

//open nav menu dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block'
}

//close nav menu dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline';
    closeNavBtn.style.display = 'none'
}
openNavBtn.addEventListener('click',openNav);
closeNavBtn.addEventListener('click',closeNav);

const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show-sidebar-btn');
const hideSiderbar = document.querySelector('#hide-sidebar-btn');

//show siderbar on small devices
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSiderbar.style.display = 'inline-block';
}

//hide sidebar on small devices
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSiderbar.style.display = 'none';
}

showSidebarBtn.addEventListener('click',showSidebar);
hideSiderbar.addEventListener('click',hideSidebar)
