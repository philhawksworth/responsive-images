const fs    = require('fs');
const page  = require('./templates/page.js');
const image = require('./templates/image.js');


const images = function() {
  let imageHTML = [];

  imageHTML.push(image({
    src: '/img/sarnie-open.jpg',
    alt: 'an open sandwich'
  }));
  imageHTML.push(image({
    src: '/img/massive-burgers.jpg',
    alt: 'monsterous burgers'
  }));

  return imageHTML.join('\n');
}

const html = page({
  title: 'Responsive images FTW!',
  content: images()
});



fs.writeFile('./dist/index.html', html, function(err) {
  if(err) return console.error(err);
  return console.log("Yay! File created.")
});
