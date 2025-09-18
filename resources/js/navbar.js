//Part 3: I copied the template given in this homework's pdf. Besides changing some paths, there was really not much
// change to be made. We should note the Ryan Yen Taskbar Brandh, which is necessary to display the taskbar title in JS.

function loadNavbar() {
    const container = document.getElementById('navbar-container');
    // Create nav element
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
    //Ryan Yen Taskbar Brand - This was not in the code from the pdf but I wanted to keep my taskbar exactly the same.
    const brand = document.createElement('a');
    brand.className = 'navbar-brand ms-3';
    brand.textContent = "Ryan Yen's Taskbar";
    nav.appendChild(brand);
    // Create div
    const navDiv = document.createElement('div');
    navDiv.className = 'collapse navbar-collapse';
    navDiv.id = 'navbarNav';
    // Create ul
    const ul = document.createElement('ul');
    ul.className = 'navbar-nav';
    // Create nav items
    const navItems = [
        { text: 'Home', href: '../views/index.html' },
        { text: 'Hobbies', href: '../views/Hobbies.html' }
    ];
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    // Assemble the navbar
    navDiv.appendChild(ul);
    nav.appendChild(navDiv);
    container.appendChild(nav)
}

/* We could also use innerHtml but I learned that elsewhere.
function loadNavbar() {
    const container = document.getElementById('navbar-container');
    // Create nav element
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

    nav.innerHTML = `
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
  			<div class="container-fluid">
    			<a class="navbar-brand" href="#">Ryan Yen's Taskbar</a>
    			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      				<span class="navbar-toggler-icon"></span>
    			</button>
    			<div class="collapse navbar-collapse" id="navbarBasic">
      				<ul class="navbar-nav me-auto mb-2 mb-xl-0">
        				<li class="nav-item">
          					<a class="nav-link" href="../views/index.html">Home</a>
        				</li>
        				<li class="nav-item">
          					<a class="nav-link" href="../views/Hobbies.html">Hobbies</a>
        				</li>
      				</ul>

    			</div>
  			</div>
		</nav>
    `;
    container.appendChild(nav)
}
*/
