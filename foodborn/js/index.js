// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;
// and define our dom elements to make it easier to read
let scrollerMiddleBottom = document.querySelector('.scroller-middle-bottom');
let scrollerMiddleTop = document.querySelector('.scroller-middle-top');
let scrollerTop = document.querySelector('.scroller-top');


// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
scrollerMiddleBottom.addEventListener('mousedown',function(){
  active = "middle-bottom";
  // Add our scrolling class so the scroller has full opacity while active
  scrollerMiddleBottom.classList.add('scrolling');
});
scrollerMiddleTop.addEventListener('mousedown',function(){
  active = "middle-top";
  // Add our scrolling class so the scroller has full opacity while active
  scrollerMiddleBottom.classList.add('scrolling');
});


// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerMiddleTop.classList.remove('scrolling');
  scrollerMiddleBottom.classList.remove('scrolling');
  scrollerTop.classList.remove('scrolling');
});

document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerMiddleTop.classList.remove('scrolling');
  scrollerMiddleBottom.classList.remove('scrolling');
  scrollerTop.classList.remove('scrolling');
});

// We'll have to do the same for our top scroller
scrollerTop.addEventListener('mousedown',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
  // Calculate our transform
  let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
  // we show all our bottom image but how much of our middle and top,
  // that'll depend on what we're dragging

  // if we're dragging the middle-top slider
  if (active==="middle-top"){
    document.querySelector('.middle-top').style.width = transform+"px";
    scrollerMiddleTop.style.left = transform-25+"px";
    
    // if we're using scroller-middle, middle must always be to the right of top
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddleTop.getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-5+"px";
      scrollerTop.style.left = transform-30+"px";
    }
    if (scrollerMiddleTop.getBoundingClientRect().left>scrollerMiddleBottom.getBoundingClientRect().left-5){
      document.querySelector('.middle-bottom').style.width = transform+5+"px";
      scrollerMiddleBottom.style.left = transform-20+"px";
    }
  }

  // if we're dragging the middle-bottom slider
  if (active==="middle-bottom"){
    document.querySelector('.middle-bottom').style.width = transform+"px";
    scrollerMiddleBottom.style.left = transform-25+"px";
    
    // if we're using scroller-middle, middle must always be to the right of top
    if (scrollerMiddleTop.getBoundingClientRect().left>scrollerMiddleBottom.getBoundingClientRect().left-5){
      document.querySelector('.middle-top').style.width = transform-5+"px";
      scrollerMiddleTop.style.left = transform-30+"px";
    }
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddleBottom.getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-10+"px";
      scrollerTop.style.left = transform-30+"px"; 
    }
  }

  // if we're dragging the top slider
  if (active==="top"){
    document.querySelector('.top').style.width = transform+"px";
    scrollerTop.style.left = transform-25+"px";
    
    // if we're using scroller-top, top must always be to the left
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddleTop.getBoundingClientRect().left-5){
      document.querySelector('.middle-top').style.width = transform+5+"px";
      scrollerMiddleTop.style.left = transform-20+"px";
    }
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddleBottom.getBoundingClientRect().left-10){
      document.querySelector('.middle-bottom').style.width = transform+10+"px";
      scrollerMiddleBottom.style.left = transform-15+"px"; 
    }
  }
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
active = "middle-bottom";
scrollIt(460);
active = "middle-top";
scrollIt(350);
active = "top";
scrollIt(230);
active = false;

// And finally let's repeat the process for touch events
// first our middle scroller...
scrollerMiddleTop.addEventListener('touchstart',function(){
    active = "middle-top";
    scrollerMiddle.classList.add('scrolling');
});
scrollerMiddleBottom.addEventListener('touchstart',function(){
    active = "middle-bottom";
    scrollerMiddle.classList.add('scrolling');
});

// then scroller top, our second scroller
scrollerTop.addEventListener('touchstart',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
    scrollerMiddleTop.classList.remove('scrolling');
    scrollerMiddleBottom.classList.remove('scrolling');    
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
    scrollerMiddleTop.classList.remove('scrolling');
    scrollerMiddleBottom.classList.remove('scrolling');
});

document.querySelector('.wrapper').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});