<div class="hamburger">
	<span class="hamburger-top"></span>
	<span class="hamburger-middle"></span>
	<span class="hamburger-bottom"></span>
</div>

<nav class="vertical">
	<a class="navitem" href="/">Work</a>
	<a class="navitem" href="/about">About</a>
	<a class="navitem" target="_blank" href="https://twitter.com/mikemaccana">Twitter</a>
	<a class="navitem" target="_blank" href="http://github.com/mikemaccana">GitHub</a>
	<a class="navitem" target="_blank" href="https://speakerdeck.com/mikemaccana">Speaker Deck</a>
	<a class="navitem" target="_blank" href="https://medium.com/@mikemaccana">Medium</a>
	<a class="navitem" target="_blank" href="http://stackoverflow.com/users/123671/mikemaccana">StackOverflow</a>
	<a class="navitem" target="_blank" href="https://soundcloud.com/mikemaccana">SoundCloud</a>
	<a class="navitem" target="_blank" href="http://instagram.com/mikemaccana">Instagram</a>
	<a class="navitem" target="_blank" href="https://www.linkedin.com/in/mikemaccana">LinkedIn</a>
	<img class="linkedin-tracker" src="https://www.linkedin.com/profile/view?authToken=zRgB&authType=name&id=13692926" alt="Not provided"/>
</nav>

<script>	
	export default {
		oncreate: function(){
			var log = console.log.bind(console), 
				select = document.querySelector.bind(document),
				selectAll = document.querySelectorAll.bind(document);

			var menuToggledElements = selectAll('nav, body, .hamburger, .content, footer');

			// Clicking ☰ button displays nav
			select('.hamburger').addEventListener('click', function(event) {
				menuToggledElements.forEach(function(element, index){
					element.classList.toggle('menu-active');
				});
				event.preventDefault();
			});
		}
	}
</script>
