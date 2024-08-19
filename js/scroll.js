const btnUp = {
	el: document.querySelector('.top__btn'),
	svg: document.querySelector('.svg__btn-up-hide'),
	show() {
		// удалим у кнопки класс btn-up_hide
		this.el.classList.remove('top_hide')
		this.svg.classList.remove('svg__btn-up-hide')
	},
	hide() {
		// добавим к кнопке класс btn-up_hide
		this.el.classList.add('top_hide'),
			this.svg.classList.add('svg__btn-up-hide')
	},
	addEventListener() {
		// при прокрутке содержимого страницы
		window.addEventListener('scroll', () => {
			// определяем величину прокрутки
			const scrollY = window.scrollY || document.documentElement.scrollTop
			// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
			scrollY > 400 ? this.show() : this.hide()
		})
		// при нажатии на кнопку .btn-up
		document.querySelector('.top__btn').onclick = () => {
			// переместим в начало страницы
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		}
	},
}

btnUp.addEventListener()
