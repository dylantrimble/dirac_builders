class NavComponent extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = `
    <nav class="home-nav">
        <a><img src="./styles/images/Logo/Standard Logo Files/WhiteonTransparent.png" class="logo" alt="logo"></a>
    </nav>
    <div class="menu-wrap">
        <input type="checkbox" class="toggler">
        <div class="hamburger">
            <div></div>
        </div>
        <div class="menu">
            <div>
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

window.customElements.define('nav_component', NavComponent);