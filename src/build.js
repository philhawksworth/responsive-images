const fs    = require('fs');
const path    = require('path');
const glob    = require('glob');
const page  = require('./templates/page.js');
const image = require('./templates/image.js');


const images = function() {
  var imageHTML = [];
  var files = glob.sync("dist/img/*.jpg");
  files.forEach(file => {

    imageHTML.push(image({
      src: `/img/${ path.basename(file) }`,
      alt: `A tasty sandwich (${ path.basename(file) })`
    }));

  });
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
