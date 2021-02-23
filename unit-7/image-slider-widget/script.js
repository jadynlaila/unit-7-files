
$(function () {

    //settings for the slider
    let width = 720;
    let animationSpeed = 2000;
    let pause = 3000;

    //cache dom elements
    let $slideContainer = $('.slides');
    let $slides = $('.slide');
    let interval;
    let currentSlide = 1;

    //create a function that will start the slider 
    function startSlider() {
        interval = setInterval(function () {
            //animating the slides container will casue the action in the function to happen every delay
            $slideContainer.animate({ 'margin-left': '-=' + width },
                animationSpeed,
                function () {
                    currentSlide++;
                    if (currentSlide == $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0);
                    }
                })
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }
    startSlider();
    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    // let html = $('html')
    // let $randy1 = Math.floor(Math.random() * 999);
    // let $randy2 = Math.floor(Math.random() * 999);
    // let $randy3 = Math.floor(Math.random() * 999);
    // let delay2 = 1000;
    // let interval2;
    // let $backgroundColor = `RGB(${$randy1}, ${$randy2}, ${$randy3})`;


    // function backgroundRandom() {
    //     interval2 = setInterval(function () {
    //         let $randy1 = Math.floor(Math.random() * 255);
    //         let $randy2 = Math.floor(Math.random() * 255);
    //         let $randy3 = Math.floor(Math.random() * 255);
    //         let $backgroundColor = `RGB(${$randy1}, ${$randy2}, ${$randy3})`;
    //         html.css('background-color', $backgroundColor);
    //     }, delay2);
    // }

    // backgroundRandom();
    let $whiteSpace = $('.whitespace');
    let interval3;
    let delay = 1000;
    let $space = $('.space');
    let isRunning = true;
    $whiteSpace.css('background-color', 'red');
    $whiteSpace.css('height', '100px');
    $whiteSpace.css('width', '100px');
    $whiteSpace.css('display', 'none');
    $whiteSpace.css('margin', 'none')

    function addImage() {
        //will add a class to every thing as its being made and then make that class have an onclick that will run the stop function
        interval3 = setInterval(function () {


            // $whiteSpace.on('click', Start());
            let newSpace = $whiteSpace.clone();
            $whiteSpace.css('display', 'none');
            newSpace.addClass('whitespace');
            newSpace.appendTo($space);
            newSpace.on('click', checkRunning);
            newSpace.css('display', 'inline-flex');
        }, delay);
    }

    function checkRunning(){
        if (isRunning) {
        isRunning = false;
        clearInterval(interval3);
    }else{
        isRunning = true;
        addImage();
    }
    }
    $whiteSpace.on('click', checkRunning);
    addImage();
})

