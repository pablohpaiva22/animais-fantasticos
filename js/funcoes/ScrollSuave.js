export default class ScrollSuave {
	constructor(link, options) {
		this.link = link
		if (options === undefined) {
			this.options = {
				behavior: 'smooth',
				block: 'start'
			}
		} else {
			this.options = options
		}

		this.scrolling = this.scrolling.bind(this)
	}

	getLink() {
		const lista = document.querySelectorAll(this.link);
		return lista
	}

	scrolling(e) {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");
		const secao = document.querySelector(href);
		secao.scrollIntoView(this.options)
	}

	addEvent() {
		this.getLink().forEach((item) => {
			item.addEventListener("click", this.scrolling);
		})
	}
	
	init() {
		if(this.link.length) {
			this.addEvent()
		}
		return this
	}
}