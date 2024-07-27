let products = [
	{
		name: 'Online clothing store Yanki',
		descriptions:
			'The site was created by me for coursework at the university, a site about selling clothes. There is adaptation for mobile devices.',
		year: '2023',
		price: '100 $',
		url: 'img/yanki.png',
		urlDemo: 'https://nimarchik.github.io/yanki.github.io/',
		urlGit: 'https://github.com/Nimarchik/yanki.github.io',
	},
	{
		name: 'Avion online furniture store',
		descriptions:
			'The site was created to get a hand in layout. Template found on the Internet, there is adaptation for cell phones. Contact for purchase can be made in the footer of the site. ',
		year: '2024',
		price: '100 $',
		url: 'img/avion.png',
		urlDemo: 'https://nimarchik.github.io/xwear/',
		urlGit: 'https://github.com/Nimarchik/xwear',
	},
	{
		name: 'Web site for the presentation of the game SOS',
		descriptions:
			'The site was created to get a hand in layout. Template found on the Internet, there is adaptation for cell phones. Contact for purchase can be made in the footer of the site.',
		year: '2023',
		price: '100 $',
		url: 'img/sos.png',
		urlDemo: 'https://nimarchik.github.io/game-sites.githab.io/',
		urlGit: 'https://github.com/Nimarchik/game-sites.githab.io',
	},
	{
		name: 'I created this site called LeasCar to practice building websites.',
		descriptions:
			'The site is made for practice in creating websites, there is adaptation for cell phones. Contact for purchase can be made in the footer of the site.',
		year: '2023',
		price: '100 $',
		url: 'img/leas.png',
		urlDemo: 'https://nimarchik.github.io/leaseCar.githab.io/',
		urlGit: 'https://github.com/Nimarchik/leaseCar.githab.io',
	},
]

let cards = document.querySelector('.project__carts')
let slice = products.slice(0, 4)
products.map(function (item) {
	cards.innerHTML += `
    <div class="project__card">
								<div class="project__card-block">
									<img src="${item.url}" alt="" class="project__card-img" />
								</div>
								<div class="project__card-content">
									<h3 class="project__card-title">
										${item.name}
									</h3>
									<p class="project__card-descript">
										${item.descriptions}
									</p>
									<ul class="project__card-list">
										<li class="project__card-item-title">
											<h4 class="project__card-list-titles">Project Info</h4>
										</li>
										<li class="project__card-item">
											<h4 class="project__card-list-title">Year</h4>
											<p class="project__card-list-text">${item.year}</p>
										</li>
										<li class="project__card-item">
											<h4 class="project__card-list-title">Role</h4>
											<p class="project__card-list-text">Front-end Developer</p>
										</li>
										<li class="project__card-item">
											<h4 class="project__card-list-title">Price</h4>
											<p class="project__card-list-text">${item.price}</p>
										</li>
									</ul>
									<div class="project__card-links">
										<a href="${item.urlDemo}" class="project__card-link"
											>Live Demo
											<svg
												class="project__card-link-svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g clip-path="url(#clip0_7_108)">
													<path
														d="M5.9897 19.2176L16.3036 8.90369V16.3891L18.3033 16.3891L18.3033 5.48978L7.40391 5.48978L7.40391 7.48948L14.8893 7.48948L4.57549 17.8033L5.9897 19.2176Z"
														fill="inherit"
													/>
												</g>
												<defs>
													<clipPath id="clip0_7_108">
														<rect width="24" height="24" fill="white" />
													</clipPath>
												</defs>
											</svg>
										</a>
										<a href="${item.urlGit}" class="project__card-link"
											>See on Github
											<svg
												class="project__card-link-svg"
												width="22"
												height="22"
												viewBox="0 0 22 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M11.0282 0.166748C5.06011 0.166748 0.223022 5.00383 0.223022 10.9719C0.223022 15.7451 3.31811 19.7957 7.61244 21.2257C8.15302 21.3232 8.34802 20.9906 8.34802 20.7046C8.34802 20.4478 8.33936 19.7675 8.33611 18.8673C5.32986 19.5194 4.69502 17.4178 4.69502 17.4178C4.20536 16.1698 3.49577 15.8372 3.49577 15.8372C2.51536 15.1666 3.57052 15.1818 3.57052 15.1818C4.65602 15.2576 5.22477 16.2954 5.22477 16.2954C6.18894 17.9464 7.75544 17.4698 8.36861 17.1935C8.46719 16.4948 8.74886 16.0181 9.05652 15.7483C6.65802 15.4764 4.13602 14.5491 4.13602 10.4075C4.13602 9.22992 4.55744 8.26358 5.24536 7.50958C5.13594 7.2355 4.76219 6.13592 5.35261 4.64958C5.35261 4.64958 6.25936 4.35817 8.32311 5.75567C9.2045 5.51589 10.1137 5.3935 11.0271 5.39167C11.9406 5.39315 12.8498 5.51554 13.7311 5.75567C15.7959 4.35708 16.7016 4.64958 16.7016 4.64958C17.292 6.13592 16.9215 7.2355 16.8089 7.50958C17.5022 8.26358 17.9182 9.22883 17.9182 10.4075C17.9182 14.5599 15.394 15.4721 12.9869 15.7397C13.3714 16.0733 13.7181 16.732 13.7181 17.7395C13.7181 19.1847 13.7051 20.3503 13.7051 20.7046C13.7051 20.9938 13.8979 21.3297 14.4494 21.2235C18.7415 19.7913 21.8334 15.744 21.8334 10.9719C21.8334 5.00383 16.9963 0.166748 11.0282 0.166748Z"
													fill="inherit"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
    `
})

const btnMenu = document.querySelector('.nav__menu-btn'),
	menuContent = document.querySelector('.nav__menu-content')

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('nav__menu-btn--active')

	menuContent.classList.toggle('nav__menu-content--show')
})

let navList = document.querySelectorAll('.nav__list-item')

navList.forEach(function (item) {
	item.addEventListener('click', () => {
		menuContent.classList.remove('nav__menu-content--show')
		btnMenu.classList.remove('nav__menu-btn--active')
	})
})

