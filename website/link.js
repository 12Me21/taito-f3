// browsers should just do this by default..
for (var e of document.querySelectorAll('h1,h2,h3,h4,h5,h6')) {
	if (e.id) {
		var link = document.createElement('a')
		link.href = "#"+e.id
		link.setAttribute('style', "text-decoration:unset;color:unset;")
		link.appendChild(e.parentNode.replaceChild(link, e))
	}
}
/*document.onclick = function(event) {
	let t = event.target
	if (t.id) location.hash = t.id
}*/
