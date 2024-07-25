// browsers should just do this by default..
var h = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
for (var i=0; i<h.length; i++) {
	var e = h[i]
	if (e.id) {
		var link = document.createElement('a')
		link.href = "#"+e.id
		link.setAttribute('style', "text-decoration:none;color:inherit;")
		link.appendChild(e.parentNode.replaceChild(link, e))
	}
}
/*document.onclick = function(event) {
	let t = event.target
	if (t.id) location.hash = t.id
}*/

//egh..
for (let img of document.images) {
	img.style.width = "calc("+img.getAttribute('width')+"px * var(--RX,1) / var(--X,1))"
	img.style.height = "calc("+img.getAttribute('height')+"px * var(--RX,1) / var(--X,1))"
}

var ql
~function self() {
	var dpr = +window.devicePixelRatio
	var s = document.documentElement.style
	let adpr = dpr > 0.75 ? dpr : 1
	s.setProperty('--X', adpr || 1) // device pixels per css pixel
	s.setProperty('--RX', Math.round(adpr) || 1) // rounded
	// refresh listener
	ql && ql.removeListener(self)
	ql = matchMedia("(-webkit-device-pixel-ratio: "+dpr+")")
	ql.addListener(self)
}()
