// this is the ONLY correct way to do this. all others *glaring at <script defer>* will create a flash of unrendered content.
function defer(fn) {
	document.addEventListener('DOMContentLoaded', fn)
}

defer(e=>{
	for (let e of document.querySelectorAll('f3-bits')) {
		if (/,|:/.test(e.textContent)) {
			let th = []
			let td = []
			let offs = 0
			for (let def of e.innerHTML.split(",").reverse()) {
				let [name, len] = def.split(":")
				len = +len || 1
				let hide = /^(#)$/.test(name)
				let special = /^(⋯|-|0|1|[.]|[?])$/.test(name)
				let cont = /^(⋯)$/.test(name)
				
				for (let i=0; i<len; i++) {
					let h
					if (!hide && i==0 && !cont) {
						if (offs % 4 == 0)
							h = "<th class='f div'>"
						else
							h = "<th class=f>"
					} else {
						if (offs % 4 == 0)
							h = "<th class=div>"
						else
							h = "<th>"
					}
					if (!hide)
						h += ""+offs
					th.push(h)
					offs++;
				}
				
				let d = `<td colspan=${len}`
				if (hide || special)
					d += ` class=x`
				d += `>`
				if (!hide)
					d += name
				
				td.push(d)
			}
			e.outerHTML =`<table class="${e.className} bits"><tr>${th.reverse().join("")}<tr>${td.reverse().join("")}</table>`
		} else {
			let n = e.textContent.replace(/ /g,"")
			e.outerHTML = `<table class=bits><tr style="counter-reset:bnum ${n.length}">${"<th>".repeat(n.length)}<tr>${n.replace(/[01]|([^01])( ?\1)*/g, (m)=>`<td${m[0]<="1"?" class=x":""} colspan=${m.length}>${m[0]}`)}</table>`
		}
		//	e.innerHTML = e.innerHTML.replace(/([a-zA-Z])( ?\1)*/g, "<b>$&</b>")
	}
})
