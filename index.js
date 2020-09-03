class Canvas {
	constructor(selector, config) {
		this.element = document.querySelector(selector)
		this.config = config
		this.canvas = document.createElement('canvas')
		this.canvas.width = config.width
		this.canvas.height = config.height
		this.ctx = this.canvas.getContext('2d')

		this.element.appendChild(this.canvas)
		this.lastTime = 0
	}

	loop(time, func) {
		const deltaTime = time - this.lastTime
		this.lastTime = time
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		func(deltaTime)
		requestAnimationFrame((deltaTime) => this.loop(deltaTime, func))
	}

	run(func) {
		this.loop(null, func)
	}
}
