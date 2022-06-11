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
	document.querySelectorAll('.nav-item').forEach(item => {
		item.addEventListener('click', event => {
			//handle click on toggled navigation
			mobileMenu.classList.remove('show');
			menuToggler.classList.add('collapsed');
		})
	});
	// lets create section 4 programatically
	const mainContent = document.querySelector('main');
	const newSection = document.createElement('section');
	newSection.setAttribute('id', 'section4');
	newSection.setAttribute('data-nav', 'section 4');
	const newSectionDiv = document.createElement('div');
	const newSectionh2 = document.createElement('h2');
	const newSectionp1 = document.createElement('p');
	const newSectionp2 = document.createElement('p');
	newSectionh2.innerHTML = 'Section 4';
	newSectionp1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
	newSectionp2.innerHTML = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
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

	// build the nav
	//find the nav container
	const navContainer = document.getElementById('navbar__list');
	//find all the sections to the name of the data-nav
	document.querySelectorAll('section').forEach(item => {
		let dataNav = item.getAttribute('data-nav');
		let dataId = item.getAttribute('id');
		//create an li element for each
		let newLI = document.createElement('li');
		newLI.setAttribute('class', 'nav-item');
		let newA = document.createElement('a');
		newA.setAttribute('class', 'nav-link px-lg-3 py-3 py-lg-4');
		newA.setAttribute('href', `#${dataId}`);
		newA.setAttribute('id', `${dataId}Nav`);
		newA.innerHTML = dataNav;
		newLI.appendChild(newA);
		//append it to the container
		navContainer.appendChild(newLI);
	})

	// Add class 'active' to section when near top of viewport
	// on window scroll
	window.addEventListener('scroll', function () {
		// get the sections on the page and loop
		const sections = document.querySelectorAll('section');
		sections.forEach(section => {
			let sectionID = section.getAttribute('id');
			let navID = document.getElementById(`${sectionID}Nav`)
			// get the distance from top
			const currentTop = section.getBoundingClientRect().top;
			//console.log(currentTop);
			// if the distance to the top is between 0-100px
			if (currentTop >= -5 && currentTop < 200) {
				section.classList.add('active-section');
				navID.classList.add('active-nav');
				// otherwise, remove the class
			} else {
				section.classList.remove('active-section');
				navID.classList.remove('active-nav');
			}
		});
	});

	// Scroll to anchor ID using scrollTO event
	document.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();
			const sectionId = link.getAttribute('href');
			//console.log(sectionId);
			const section = document.querySelector(sectionId);
			section.scrollIntoView();
		});
	});
	
	// Scroll to Top
	window.addEventListener('scroll', function () {
	const scrollBtn = document.getElementById('scrollToTop');
		const currentTop = document.body.getBoundingClientRect().top * -1;
		//console.log(currentTop);
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
