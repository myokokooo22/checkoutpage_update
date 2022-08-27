// START Mobile View search btn
var searchbtn = document.getElementById('minisearch');
var searchbackground = document.querySelector('.searchbgs');
var closebtn = document.getElementById('closebtn');
var searchgroup = document.querySelector('.input-group.searchs-group');

searchbtn.addEventListener('click',()=>{
    searchbackground.classList.add('active');
    searchgroup.style.display = 'flex';
    closebtn.style.display = 'inline-block';
});

closebtn.addEventListener('click',()=>{
    searchbackground.classList.remove('active');
    searchgroup.style.display = 'none';
    closebtn.style.display = 'none';
});
// END Mobile View Search btn

//START Search Categories 
var catedropdown = document.querySelector('.cate-categories-content');
var allcatedropdown = document.getElementById('catedropdown').addEventListener('click',()=>{
    catedropdown.classList.toggle('active');
});
//END Search Categories

//START Navbar dropdown categories
var dropdownallcat = document.querySelector('.dropdown-categories-content');
var allcat = document.getElementById('brand1').addEventListener('click',()=>{
    dropdownallcat.classList.toggle('active');
});

//END Navbar dropdown categories
