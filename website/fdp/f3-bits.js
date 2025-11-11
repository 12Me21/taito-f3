// this is the ONLY correct way to do this. all others *glaring at <script defer>* will create a flash of unrendered content.
function defer(fn) {
	document.addEventListener('DOMContentLoaded', fn)
}

defer(e=>{
	for (let e of document.querySelectorAll('f3-bits')) {
		if (/,|:/.test(e.textContent)) {
			let n = e.innerHTML.split(",")
			let l = 0
			let d = n.map(m=>{
				m = m.split(":")
				console.log(m)
				let c = (+m[1])||1
				l += c
				return `<td${/^(⋯|-|0|1|\.)$/.test(m[0])?" class=x":""} colspan=${c}>${m[0]}`
			})
			e.outerHTML = `<table class=bits><tr style="counter-reset:bnum ${l}">${"<th>".repeat(l)}<tr>${d.join("")}</table>`
		} else {
			let n = e.textContent.replace(/ /g,"")
			e.outerHTML = `<table class=bits><tr style="counter-reset:bnum ${n.length}">${"<th>".repeat(n.length)}<tr>${n.replace(/[01]|([^01])( ?\1)*/g, (m)=>`<td${m[0]<="1"?" class=x":""} colspan=${m.length}>${m[0]}`)}</table>`
		}
		//	e.innerHTML = e.innerHTML.replace(/([a-zA-Z])( ?\1)*/g, "<b>$&</b>")
	}
})
