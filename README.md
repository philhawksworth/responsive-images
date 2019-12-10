# Learn With Jason - lazy loading

## Make a responsive image element

1. image element in an html page
1. add 3 ready made sources (different sized sandwiches)
1. add src sets
1. test for responsive-ness

## Generate or source images?

1. We'll use an API... Git LFS / NLM
1. Set up NLM
1. Test images in browser via transform URLs
1. Update src sets


## Make a build

1. page.js template
1. build.js
1. live-server dist
1. npm-watch
1. image.js template
1. dist/css
1. We have a build pipeline/(VS)SSG!

## add lazy loading

1. Native lazyload? (if "loading" in HTMLImageElement.prototype))
1. Initial state: everything is tiny via NLM
1. Scale and blur with css
1. Add intersection observer (switch source, remove blur onload)


# Prep

1. Get difference sized sandwich images


# Resources

initial sandwiches

- widest - https://unsplash.com/photos/pw19GpDRZic
- wide -  https://unsplash.com/photos/cff_w0ADWIA
- large - https://unsplash.com/photos/rFYmnobNI6o
- small - https://unsplash.com/photos/VRB1LJoTZ6w
