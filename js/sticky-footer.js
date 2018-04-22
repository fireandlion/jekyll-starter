// If the page is short and the footer is showing its underpants,
// make the footer high enough to fill the page.

function stickyFooter() {

    'use strict';

    var footer = document.querySelector('.footer');
    var footerDepth = footer.getBoundingClientRect().bottom;
    var content = document.querySelector('.content');
    var contentDepth = content.getBoundingClientRect().bottom;
    var footerHeight = window.innerHeight - contentDepth;

    if (footerDepth < window.innerHeight) {
        // footer.style.position = 'absolute';
        // footer.style.bottom = '0';
        footer.style.minHeight = footerHeight + 'px';
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
