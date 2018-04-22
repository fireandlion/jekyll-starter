// If the page is short and the footer is showing its underpants,
// fix it to the bottom of the page.

function stickyFooter() {

    'use strict';

    var footer = document.querySelector('.footer');
    var footerDepth = footer.getBoundingClientRect().bottom;

    if (footerDepth < window.innerHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    }

}

// Check if images have all loaded.
// Once they have, make the footer sticky.
// https://stackoverflow.com/a/11071687/1781075
function checkImagesLoaded() {

    'use strict';

    if ( document.images.length == 0 ) {
        console.log('No images, sticking footer to bottom.');
        stickyFooter();
    } else {
        var imgs = document.images;
        var len = imgs.length;
        var counter = 0;

        [].forEach.call( imgs, function( img ) {
            img.addEventListener( 'load', incrementCounter, false );
        } );

        function incrementCounter() {
            counter++;
            if ( counter === len ) {
                console.log('Images loaded, sticking footer to bottom.');
                stickyFooter();
            }
        }
    }

}

checkImagesLoaded();
