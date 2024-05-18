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
