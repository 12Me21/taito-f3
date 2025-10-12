let x = [
]

function round(sec) {
	let px = sec*1000000/0.1498913287866296934722326313422768;
	let r = Math.round(px)
	if (Math.abs(px-r) < 0.1)
		return r
	return px
}
for (let [_,total,a,b] of x) {
	console.log(round(a),round(b))
}
