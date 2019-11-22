let domTree = {}

const getRandomColor = (optA) => {
	let r = parseInt(Math.random() * 255), g = parseInt(Math.random() * 255), b = parseInt(Math.random() * 255)
	let a = optA || 1
	return `rgba(${r}, ${g}, ${b}, ${a})`
}

const transformPerspective = (elt, depth) => {
	elt.style.perspective = `${depth}px`
	elt.style.transform = `rotate3d(${1}, ${1}, ${1}, ${parseInt(depth)}deg)`
}

const transformAddShadow = (elt, depth) => {
	// elt.style['background-image'] = `linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)`
	elt.style.color = 'transparent';
	elt.style['border-width'] = '0px'
	elt.style.transform = `translateX(${parseInt(50 * Math.sin((new Date().getTime()) * 30 * depth * 5) / 10)})px`
	elt.style['box-shadow'] = `${parseInt(Math.random() * 30 - 15)}px ${parseInt(Math.random() * 10 - 5)}px ${parseInt(Math.random() * 30 - 15)}px rgba(0, 0, 0, 0.5)`
	elt.style['background-clip'] = 'content-box'
	elt.style['background-position'] = `${parseInt(Math.random() * 100 - 50)}px ${parseInt(Math.random() * 100 - 50)}px`
}

// https://media3.giphy.com/media/wa8uMtV7bmdGTGGmD7/giphy.gif

const transformAddColorBackground = (d, depth) => {
	let firstColor = getRandomColor(1)
	d.style.background = "rgba(0, 0, 0, 0)"
	// d.style.transition = "all 5s"

	d.style.background = `conic-gradient(from ${parseInt(new Date().getTime() % 90)}deg, ${firstColor}, ${getRandomColor(0.2)}, ${getRandomColor(0.2)}, ${firstColor})`;
	// d.style['background-image'] = `url("https://media3.giphy.com/media/wa8uMtV7bmdGTGGmD7/giphy.gif")`
	// d.style['background-image'] = `url("https://media0.giphy.com/media/3oEduKlTiYmPPdepsk/source.gif")`
	//https://media0.giphy.com/media/3oEduKlTiYmPPdepsk/source.gif
	d.style.color = 'transparent';
	d.style['border-radius'] = `${parseInt(500 * Math.random())}px ${parseInt(500 * Math.random())}px ${parseInt(500 * Math.random())}px ${parseInt(500 * Math.random())}px`
	d.style.transform = `translateX(${parseInt(Math.sin((new Date().getTime()) * 30 * depth) / 10)})px`
	d.style['box-shadow'] = `${parseInt(Math.random() * 30 - 15)}px ${parseInt(Math.random() * 10 - 5)}px ${parseInt(Math.random() * 30 - 15)}px ${getRandomColor(0.5)}`
	// d.style['background-blend-mode'] = 'multiply'
	d.style['background-clip'] = 'content-box'
	d.style['background-position'] = `${parseInt(Math.random() * 1000 - 500)}px ${parseInt(Math.random() * 1000 - 500)}px`
}

const transformAddColorBackgroundImage = (d, depth) => {
	let firstColor = getRandomColor(1)
	d.style.background = "rgba(0, 0, 0, 0)"
	// d.style.transition = "all 5s"
	if (Math.random() < 0.5)
		d.style['background-image'] = `url("https://media3.giphy.com/media/wa8uMtV7bmdGTGGmD7/giphy.gif")`
	else 
	d.style.background = `conic-gradient(from ${parseInt(new Date().getTime() % 90)}deg, ${firstColor}, ${getRandomColor(0.2)}, ${getRandomColor(0.2)}, ${firstColor})`;
	// d.style['background-image'] = `url("https://media0.giphy.com/media/3oEduKlTiYmPPdepsk/source.gif")`
	//https://media0.giphy.com/media/3oEduKlTiYmPPdepsk/source.gif
	d.style.color = 'transparent';
	d.style['border-radius'] = `${parseInt(500 * Math.random())}px ${parseInt(500 * Math.random())}px ${parseInt(500 * Math.random())}px ${parseInt(500 * Math.random())}px`
	d.style.transform = `translateX(${parseInt(Math.sin((new Date().getTime()) * 30 * depth) / 10)})px`
	d.style['box-shadow'] = `${parseInt(Math.random() * 30 - 15)}px ${parseInt(Math.random() * 10 - 5)}px ${parseInt(Math.random() * 30 - 15)}px ${getRandomColor(0.5)}`
	// d.style['background-blend-mode'] = 'multiply'
	d.style['background-clip'] = 'content-box'
	d.style['background-position'] = `${parseInt(Math.random() * 1000 - 500)}px ${parseInt(Math.random() * 1000 - 500)}px`
}

const transformUniformSize = (d, depth) => {
	d.style['width'] = '300px'
	d.style['height'] = '100px'
	d.style['display'] = 'flex'
	d.style['flex-direction'] = Math.random() < 0.5 ? 'row' : 'column'
	d.style['align-items'] = 'center'
	d.style['justify-content'] = 'center'
}

const adjustImageOpacity = (d, depth, args) => {
	if (!(d.nodeName.toLowerCase() === 'img')) return
	if (!d.style) return
	d.style['transition'] = 'opacity 1s'
	d.style['opacity'] = `${args[0]}`
}

const transformRemoveAllStyles = (d, depth) => {
	d.style = {}
	d.className = ""
}

// const elementInViewport = (el) => {
// 	let bbox = el.getBoundingClientRect()
// 	if (bbox.top >= 0 && bbox.left >= 0 && bbox.bottom <= window.innerHeight && bbox.right <= window.innerWidth && bbox.width > 0 && bbox.height > 0) {
// }

const recursiveApply = (el, depth, fn, args) => {
	fn(el, depth, args)
	for (let i = 0; i < el.children.length; i++) {
		recursiveApply(el.children[i], depth + 1, fn, args)
	}
}

// #1
// removing div's layer by layer, starting at the deepest one.
// like peeling a website.

// #2
// turning divs into colored squares at a certain pace. increse the pace when tapping on certain keyboard keys.

// #3
// remove styles

// #4
// constant animation (rotation in place?) for some elements, at random. like in insta video.

// #5
// add some large unicode emojis on the screen—ritual related ones

// one of the characters exploring facebook marketplace while talking in the chat ?

// Sound: https://tonejs.github.io/examples/mixer.html
// https://twitter.com/teropa/status/942634511283736576
// https://editor.p5js.org/luisa/sketches

var synth = new Tone.Synth({
	oscillator: {
	  type: 'triangle8'
	},
	envelope: {
	  attack: 2,
	  decay: 1,
	  sustain: 0.4,
	  release: 8
	}
  }).toMaster()

  var synth2 = new Tone.Synth({
	oscillator: {
	  type: 'triangle8'
	},
	envelope: {
	  attack: 1.2,
	  decay: 2,
	  sustain: 0.4,
	  release: 5
	}
  }).toMaster()


var synth3 = new Tone.Synth().toMaster()

let dl = new Tone.Loop(droneLoop, "16n");
let dStarted = false
function droneLoop(time) {
  synth.triggerAttackRelease("C2", "16n", time);
}

const onKeyDown = (evt) => {
	console.log(evt.key)

	// Tone.Transport.stop();
	// dl.stop();  

	if (!dStarted) {
		Tone.Transport.start();
		dl.start();  
		dStarted = true	
	}

	synth2.triggerAttackRelease(evt.key.charCodeAt() * 3 - evt.key.charCodeAt() * 3 % 55, '4n')

	// var synth2 = new Tone.MetalSynth().toMaster()
	// synth2.triggerAttackRelease(evt.key.charCodeAt() * 2 - evt.key.charCodeAt() * 2 % 33, '4n')

	synth3.triggerAttackRelease(evt.key.charCodeAt() * 1 - evt.key.charCodeAt() * 1 % 55, '2n')

	// buildDomHierarchy()
	let depth, elt
	switch (evt.key) {
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			depth = parseInt(evt.key) * 4 + 1
			elt = getRandomElementAtDepth(depth)
			if (!elt) return
			elt.style.transition = "all 20s"

			// transformAddShadow(elt, depth)
			// transformAddColorBackground(elt, depth)

			// recursiveApply(elt, depth, transformAddColorBackground)
			recursiveApply(elt, depth, transformAddColorBackgroundImage)
		
			break		
		case 'i':
			// fade out all images on screen
			recursiveApply(document, 0, adjustImageOpacity, [0])
			break
		case 'o':
			// bring images back
			recursiveApply(document, 0, adjustImageOpacity, [1])
			break
		case 'w':
			depth = 2//parseInt(Math.random() * 10) * 4 + 1
			elt = getRandomElementAtDepth(depth)	
			recursiveApply(elt, depth, transformUniformSize)
			break
		case 'q':
			depth = 1
			elt = getRandomElementAtDepth(depth)	
			recursiveApply(elt, depth, transformRemoveAllStyles)
			break
		case ']':
			buildDomHierarchy()
			break
		
	}
}

const listDOMElements = (el, depth) => {
	if (!domTree[depth]) domTree[depth] = []
	domTree[depth].push(el)
	for (let i = 0; i < el.children.length; i++) {
		listDOMElements(el.children[i], depth + 1)
	}
}
// listElements(document, 0)
	

const buildDomHierarchy = () => {
	domTree = {}
	listDOMElements(document, 0)	
	// console.log('DOM tree: ', domTree)
}

const getRandomElementAtDepth = (d) => {
	if (!domTree[d] || !domTree[d].length) return null
	let index = parseInt(Math.random() * domTree[d].length)
	let trials = 0, found = false

	while (trials < 200 && !found) {
		trials++
		let bbox = domTree[d][index].getBoundingClientRect()
		if (bbox.top >= 0 && bbox.left >= 0 && bbox.bottom <= window.innerHeight && bbox.right <= window.innerWidth && bbox.width > 0 && bbox.height > 0) {
			found = true
		} else {
			index = parseInt(Math.random() * domTree[d].length)
		}
	}

	return domTree[d][index]
}

setTimeout(function(){
	alert("Get out while you can!")
	//chrome.runtime.sendMessage({timeUp: true})
	buildDomHierarchy()
	$(document).keydown(onKeyDown)
}, 2000)