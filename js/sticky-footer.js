// If the page is short and the footer is showing its underpants,
// fix it to the bottom of the page.
var footer = document.querySelector('.footer');
var footerDepth = footer.getBoundingClientRect().bottom;
if (footerDepth < window.innerHeight) {
	footer.style.position = 'absolute';
	footer.style.bottom = '0';
}
