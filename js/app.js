/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

window.addEventListener('DOMContentLoaded', () => {
	
	/**
	 * 
	 * Togles the navbar on mobile viewport
	 * 
	 */
	
	const menuToggler = document.getElementById('navbar-toggler');
	const mobileMenu = document.getElementById('navbarResponsive');
	menuToggler.classList.add('collapsed');
	menuToggler.addEventListener('click', function () {
		if (menuToggler.classList.contains('collapsed')) {
			mobileMenu.classList.add('show');
			menuToggler.classList.remove('collapsed');
		} else {
			mobileMenu.classList.remove('show');
			menuToggler.classList.add('collapsed');
		}
	});

	/**
	 * 
	 * creates section 4 programatically
	 * 
	 */
	const mainContent = document.querySelector('main');
	const newSection = document.createElement('section');
	newSection.setAttribute('id', 'section4');
	newSection.setAttribute('data-nav', 'section 4');
	const newSectionDiv = document.createElement('div');
	const newSectionh2 = document.createElement('h2');
	const newSectionp1 = document.createElement('p');
	const newSectionp2 = document.createElement('p');
	newSectionh2.innerHTML = 'Section 4';
	newSectionp1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
	newSectionp1.innerHTML += 'Morbi fermentum metus faucibus lectus pharetra dapibus. ';
	newSectionp1.innerHTML += 'Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. ';
	newSectionp1.innerHTML += 'Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. ';
	newSectionp1.innerHTML += 'Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, ';
	newSectionp1.innerHTML += 'nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. ';
	newSectionp1.innerHTML += 'Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, ';
	newSectionp1.innerHTML += 'aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, ';
	newSectionp1.innerHTML += 'faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. ';
	newSectionp1.innerHTML += 'Sed congue et odio sed euismod.';
	newSectionp2.innerHTML = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ';
	newSectionp2.innerHTML += 'ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. ';
	newSectionp2.innerHTML += 'Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, ';
	newSectionp2.innerHTML += 'eget elementum tortor mollis non.';
	newSectionDiv.setAttribute('class', 'landing__container');
	newSection.appendChild(newSectionDiv);
	newSectionDiv.appendChild(newSectionh2);
	newSectionDiv.appendChild(newSectionp1);
	newSectionDiv.appendChild(newSectionp2);
	mainContent.appendChild(newSection);

	/**
	 * End Helper Functions
	 * Begin Main Functions
	 * 
	 */

	/**
	 * 
	 * builds the nav 
	 * first find the nav container by id
	 * finds all the sections with attribue data-nav
	 * and creates an li element for each
	 * lastly appends the li elements to the ul element
	 * 
	 */

	const navContainer = document.getElementById('navbar__list');
	document.querySelectorAll('section').forEach(item => {
		let dataNav = item.getAttribute('data-nav');
		let dataId = item.getAttribute('id');
		let newLI = document.createElement('li');
		newLI.setAttribute('class', 'nav-item');
		let newA = document.createElement('a');
		newA.setAttribute('class', 'nav-link px-lg-3 py-3 py-lg-4');
		newA.setAttribute('href', `#${dataId}`);
		newA.setAttribute('id', `${dataId}Nav`);
		newA.innerHTML = dataNav;
		newLI.appendChild(newA);
		navContainer.appendChild(newLI);
	})

	/**
	 * Adds class 'active' to section when near top of viewport on scroll
	 * first it finds the sections <section> on the page and loops to
	 * get the distance from the top
	 * if the distance to the top is between -5 and 200px adds active-section
	 * 
	 */

	window.addEventListener('scroll', function () {
		// 
		const sections = document.querySelectorAll('section');
		sections.forEach(section => {
			let sectionID = section.getAttribute('id');
			let navID = document.getElementById(`${sectionID}Nav`)
			const currentTop = section.getBoundingClientRect().top;
			if (currentTop >= -5 && currentTop < 200) {
				section.classList.add('active-section');
				navID.classList.add('active-nav');
			} else {
				section.classList.remove('active-section');
				navID.classList.remove('active-nav');
			}
		});
	});

	/**
	 * 
	 * Scroll to anchor ID using scrollTO event
	 * 
	 */
	
	document.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();
			mobileMenu.classList.remove('show');
			menuToggler.classList.add('collapsed');
			const sectionId = link.getAttribute('href');
			const section = document.querySelector(sectionId);
			section.scrollIntoView({behavior: 'smooth'});
		});
	});

	/**
	 * 
	 * Scroll to Top
	 * 
	 */

	window.addEventListener('scroll', function () {
		const scrollBtn = document.getElementById('scrollToTop');
		const currentTop = document.body.getBoundingClientRect().top * -1;
		if (currentTop > 40) {
			scrollBtn.style.display = 'inline';
		} else {
			scrollBtn.style.display = 'none';
		}
	});


	/**
	 * End Main Functions
	 * Begin Events
	 * 
	 */

	// Build menu 

	// Scroll to section on link click

	// Set sections as active

}); //end dom content loaded
