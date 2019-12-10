function loadImage(picture) {

  var sources = picture.children;

  console.log('sources :', sources);



  // var loadingPath = "images/tiny";
  // var sizes = ["large","medium","small"];

  // for(var s=0; s<sources.length; s++) {
  //   // update the src or srcset urls
  //   if (sources[s].hasAttribute("srcset")) {
  //     updateAttributeURL(sources[s], "srcset", loadingPath, "images/"+sizes[s] );
  //   } else {
  //     updateAttributeURL(sources[s], "src", loadingPath, "images/"+sizes[s] );
  //   }

  //   // remove the lazy-initial class when the full image is loaded to unblur
  //   sources[s].addEventListener('load', image => {
  //     image.target.closest("picture").classList.remove("loading")
  //   }, false);
  // }

}



// /////////    STEP 3 - define rthe function that we'll call when we observe an element
// Stop observing this image and load its source
function lazyLoad(elements) {
  elements.forEach(item => {
    if (item.intersectionRatio > 0) {
      observer.unobserve(item.target);
      loadImage(item.target);
      console.log('oberved! :', item.target);
    };
  });
};





// /////////    STEP 1 -  make an intersection oberver and configure it.

// Set up the intersection observer to detect when to define
// and load the real image source
var options = {
  rootMargin: "0px",
  threshold: 0.5
};
var observer = new IntersectionObserver(lazyLoad, options);




// /////////    STEP 2 -  attach an observer to each picture

// Watch for all pictures with a "lazy" class
var pictures = document.querySelectorAll('picture.lazy');
pictures.forEach(pic => {
  pic.classList.add('loading');
  observer.observe(pic);
});
