//get slider items(imges) by Array.from
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//get numbers of slides
var slideNumbers = sliderImages.length;

//curernt slide
var currentSlide = 1;

//get slide number element
var slide_numder = document.getElementById('slide-number');

//get prev & next
var prev = document.getElementById('prev');
var next = document.getElementById('next');


//create ul
var pagination = document.createElement('ul');
//set id for ul
pagination.setAttribute('id' , 'pagination');
//create li based on slide numbers(images)
for(var i=1 ; i <= slideNumbers ; i++){
    //create li
    var listItems = document.createElement('li');
    //set id for li
    listItems.setAttribute('data-index' , i);
    //set text in li
    var text = document.createTextNode(i);
    listItems.appendChild(text);
    //append li to the main ul
    pagination.appendChild(listItems);
}
//append ul to the main page
document.getElementById('indicators').appendChild(pagination);

//create new ul
var newPaginationCreated = document.getElementById('pagination');

//get pagination items(imges) by Array.from
var bullets = Array.from(document.querySelectorAll('#pagination li'));
//loop bullets
for(var i=0 ; i< bullets.length ; i++){
    bullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));   //to return this in integer
        checker();
    }
}


//trigger the checker() fun
checker();




//prev slide fun
function prevSlide(){
    if(prev.classList.contains('disabled')){
        return false;
    }else{
        currentSlide--;
        checker();
    }
}
prev.onclick = prevSlide;

//next slide fun
function nextSlide(){
    if(next.classList.contains('disabled')){
        return false;
    }else{
        currentSlide++;
        checker();
    }
}
next.onclick = nextSlide;



//create checker fun
function checker(){
    //set the text to the slide_numder
    slide_numder.textContent = 'Slide #' + (currentSlide) + ' of ' + (slideNumbers);

    //trigger fun of remove all active classes
    removeAllActive();

    //set active class to the current slide
    sliderImages[currentSlide - 1].classList.add('active');

    //set active class to the current li
    newPaginationCreated.children[currentSlide - 1].classList.add('active');

    //check if current slide is the first or not
    if(currentSlide == 1){
        //add disabled class to the prev
        prev.classList.add('disabled');
    }else{
        prev.classList.remove('disabled');
    }
    //check if current slide is the last or not
    if(currentSlide == slideNumbers){
        //add disabled class to the next
        next.classList.add('disabled');
    }else{
        next.classList.remove('disabled');
    }
}
//fun to remove all active classes
function removeAllActive(){
    //loop images
    sliderImages.forEach(function(img){

        img.classList.remove('active');
    });
    //loop bullets
    bullets.forEach(function(bull){

        bull.classList.remove('active');
    });
}
