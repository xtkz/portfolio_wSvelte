<script>
	import '../app.css';
	import { DarkMode, Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
</script>

<DarkMode btnClass={darkmodebtn} />
<slot />

<Footer>
	<FooterCopyright href="/" by="Алексей Соколов" year={2023} />
	<FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
	  <FooterLink href="https://t.me/polnodobra">Telegram</FooterLink>
	  <FooterLink href="https://github.com/xtkz">GitHub</FooterLink>
	  <FooterLink href="https://vk.com/alex_sokolov">VK</FooterLink>
	  <FooterLink mailto="polnodobra@gmail.com">GMail</FooterLink>
	  <FooterLink href="https://course.genclub.club/">курс Генарта</FooterLink>
	  <FooterLink href="https://threejs-journey.com/#">three.js journey</FooterLink>
	</FooterLinkGroup>
  </Footer>
