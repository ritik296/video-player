const openSideMenu = document.getElementById('open-side-menu');
const closeSideMenu = document.getElementById('close-side-menu');
const sideMenu = document.getElementById('side-menu');

// var sideMenuState = false;

openSideMenu.addEventListener('click', ()=>{
    sideMenu.classList.remove('translate-x-80');
})

closeSideMenu.addEventListener('click', ()=>{
    sideMenu.classList.add('translate-x-80');
})

function toggleDropdown(contentID){
    const content = document.getElementById(contentID);

    content.classList.toggle('hidden');
}

function markAsComplete(ele){
    ele.checked = true;
}

function toggleResources(ele){
    ele.nextElementSibling.classList.toggle('hidden')
}