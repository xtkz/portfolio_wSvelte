<script>
	import { Card, Button, Avatar, Heading, P, Hr, Tooltip, } from "flowbite-svelte";
	import MyCard from "./MyCard.svelte";
	import MyProgress from "./MyProgress.svelte";
	import HeroBack2 from "./HeroBack2.svelte";
	import { tick, onMount } from 'svelte';
	import { tweened } from "svelte/motion";
	import { sineInOut } from 'svelte/easing';

	import { ViewportAwareObject } from "@threlte/core";


	const cardsDataProg = [
		{title: 'Плэйбл GardenScapes<br>с&nbspтрубой',
			image: './images/playable-pipe.webp',
			text: 'Все права принадлежат Playrix.',
			badges: [
				{color: 'green', text: 'Playrix'},
				{color: 'purple', text: 'playable'},
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'Pixi.js'},
			],
			buttonTitle: 'Играть сейчас',
			buttonLink: 'http://g9514803.beget.tech/playable/index.html'
		},
		{title: 'Плэйбл GardenScapes<br>с&nbspключами',
			image: './images/playable-keys.webp',
			text: 'Все права принадлежат Playrix.',
			badges: [
				{color: 'green', text: 'Playrix'},
				{color: 'purple', text: 'playable'},
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'Pixi.js'},
			],
			buttonTitle: 'Играть сейчас',
			buttonLink: 'http://g9514803.beget.tech/playable2/index.html'
		},
		{title: 'Мини-игра<br>Roll-a-Ball',
			image: './images/playable-roller.webp',
			text: 'Персональный проект в рамках обучения three.js',
			badges: [
				{color: 'purple', text: 'playable'},
				{color: 'dark', text: 'React'},
				{color: 'dark', text: 'Zustand'},
				{color: 'yellow', text: '🥉drei'},
			],
			buttonTitle: 'Играть сейчас',
			buttonLink: 'https://roll-a-bolla.vercel.app/'
		},
		{title: 'Мини-игра<br>Balloon shooter',
			image: './images/playable-balloon.webp',
			text: 'Персональный проект в рамках обучения three.js',
			badges: [
				{color: 'purple', text: 'playable'},
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'Three.js'},
				{color: 'dark', text: 'GitHub'},
			],
			buttonTitle: 'Играть сейчас',
			buttonLink: 'https://xtkz.github.io/balloon-shooter/'
		},
		{title: '3D-пейзаж<br>Portal scene',
			image: './images/threejs-portal.webp',
			text: 'Учебный проект.<br>Запекание текстур и света, программирование GLSL шейдера.',
			badges: [
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'Three.js'},
				{color: 'yellow', text: 'GLSL'},
				{color: 'dark', text: 'Blender'},
			],
			buttonTitle: 'Можно покрутить',
			buttonLink: 'https://portal-to-journey.vercel.app/'
		},
		{title: '3D-пейзаж<br>Floating location',
			image: './images/threejs-location.webp',
			text: 'Учебный проект.<br>Low-poly моделирование, экспорт-импорт gLTF/glb.',
			badges: [
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'Three.js'},
				{color: 'dark', text: 'Blender'},
			],
			buttonTitle: 'Можно покрутить',
			buttonLink: 'https://floating-location.vercel.app/'
		},
		{title: 'CG-инсталляция<br>Animated Galaxy',
			image: './images/threejs-galaxy.webp',
			text: 'Учебный проект.<br>Партикловый шейдер с анимацией — красота!',
			badges: [
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'Three.js'},
				{color: 'yellow', text: 'GLSL'},
			],
			buttonTitle: 'Настроить цвета',
			buttonLink: 'https://animated-galaxy-xtkz.vercel.app/'
		},
		{title: 'CG-миниатюра<br>Almost Alphabet',
			image: './images/p5-alphabet.webp',
			text: 'Учебный проект.<br><a href="https://course.genclub.club/">course.genclub.club</a>',
			badges: [
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'p5.js'},
				{color: 'dark', text: '</>code'},
			],
			buttonTitle: 'Как будто сам пишет',
			buttonLink: 'https://editor.p5js.org/polnodobra/full/7qwGz5zSD'
		},
		{title: 'CG-миниатюра<br>Ranbow tri-grid',
			image: './images/p5-trigrid.webp',
			text: 'Учебный проект.<br><a href="https://course.genclub.club/">course.genclub.club</a>',
			badges: [
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'p5.js'},
				{color: 'dark', text: '</>code'},
			],
			buttonTitle: 'Завораживает',
			buttonLink: 'https://editor.p5js.org/polnodobra/full/fjM7G2L0J'
		},
		/* {title: 'CG-миниатюра <br> Heavy Bass',
			image: './images/p5-heavyBass.webp',
			text: 'Учебный проект.<br><a href="https://course.genclub.club/">course.genclub.club</a>',
			badges: [
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'p5.js'},
				{color: 'dark', text: '</>code'},
			],
			buttonTitle: 'Вибрирует и качает',
			buttonLink: 'https://editor.p5js.org/polnodobra/full/0rOEcQ9mS'
		}, */
		{title: 'CG-миниатюра <br> Pulsing circles',
			image: './images/p5-pulsing.webp',
			text: 'Учебный проект.<br><a href="https://course.genclub.club/">course.genclub.club</a>',
			badges: [
				{color: 'indigo', text: 'Javascript'},
				{color: 'yellow', text: 'p5.js'},
				{color: 'dark', text: '</>code'},
			],
			buttonTitle: 'Без звука стучит',
			buttonLink: 'https://editor.p5js.org/polnodobra/full/ihwusDDKq'
		},
	];

	const cardsDataVideo = [
		{title: 'DemoReel&nbsp&nbsp–&nbsp&nbsp2018',
			image: './images/video-demoreel.webp',
			text: `Сборник лучших работ за 2018 год.`,
			badges: [
				{color: 'green', text: 'ТВ'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: 'Cinema 4D'},
				{color: 'indigo', text: ' After Effects'},
			],
			buttonTitle: 'Смотреть лучшее',
			buttonLink: 'https://youtu.be/zPlln5W1XHE'
		},
		
		{title: 'Видео HomeScapes<br>с&nbsp тактильным ремонтом',
			image: './images/video-hs-3DRoom.webp',
			text: 'Рекламный креатив 3D<br> Синька и Октан <br> Все права принадлежат Playrix.',
			badges: [
				{color: 'green', text: 'Playrix'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: ' After Effects'},
				{color: 'indigo', text: 'Cinema 4D'},
			],
			buttonTitle: 'Убраться в комнате',
			buttonLink: 'https://youtu.be/6W3NlxohF4U'
		},

		{title: 'Видео GardenScapes<br>с&nbspколесом фортуны',
			image: './images/video-gs-wheel.webp',
			text: 'Рекламный креатив, 3.6M views <br> И это только на перезаливе! <br> Все права принадлежат Playrix.',
			badges: [
				{color: 'green', text: 'Playrix'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: ' After Effects'},
				{color: 'indigo', text: 'Newton 3'},
				{color: 'red', text: 'Project File'},
			],
			buttonTitle: 'Найти крысу',
			buttonLink: 'https://youtu.be/qekzJP7e5L0?t=354'
		},

		{title: 'Видео Fishdom<br>с&nbspс пожиранием мальков',
			image: './images/video-fd-feast.webp',
			text: `Рекламный креатив
				<br>Траектория рыбы полностью программная и может быть отредактирована «на ходу».
				<br> Все права принадлежат Playrix.`,
			badges: [
				{color: 'green', text: 'Playrix'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: ' After Effects'},
				{color: 'red', text: 'Project File'},
			],
			buttonTitle: 'Сожрать всех',
			buttonLink: 'https://youtu.be/3PdOJDBjXKM'
		},

		{title: 'Видео HomeScapes<br>с&nbsp котом и аквариумом',
			image: './images/video-hs-cat.webp',
			text: 'Рекламный креатив, 18k views <br> И это только на перезаливе. <br> Все права принадлежат Playrix.',
			badges: [
				{color: 'green', text: 'Playrix'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: ' After Effects'},
			],
			buttonTitle: 'Смотреть киску',
			buttonLink: 'https://youtu.be/KntcsuGpEMI'
		},

		{title: 'Видео GardenScapes<br>с&nbspплачущей женщиной',
			image: './images/video-gs-woman.webp',
			text: 'Рекламный креатив, 31k views <br> И это только на перезаливе <br> Все права принадлежат Playrix.',
			badges: [
				{color: 'green', text: 'Playrix'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: ' After Effects'},

			],
			buttonTitle: 'Починить унитаз',
			buttonLink: 'https://youtu.be/nOBgYNfjlJg?t=56'
		},

		{title: 'Пакет оформления для<br>«Хочу быть моделью»',
			image: './images/video-beModel.webp',
			text: ` полный пакет оформления, просуществовавший несколько сезонов. Логотип, заставка, плашки, титры, оформление мероприятий.`,
			badges: [
				{color: 'green', text: 'ТВ'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: 'Cinema 4D'},
				{color: 'indigo', text: ' After Effects'},
			],
			buttonTitle: 'Смотреть',
			buttonLink: 'https://youtu.be/7MpN4NVBwiY'
		},

		{title: 'Серия коротких видео<br>для «Челябинвестбанк»',
			image: './images/video-noBoring.webp',
			text: `Раскадровки, поиск визуальных образов, работа с актёром на площадке.
			<br><A href="https://www.youtube.com/playlist?list=PLpqRBPqLWIFjrEGwy-Mzv4NSFdSRsy_BD" target="_blank" class="underline hover:no-underline">
				Плейлист всех видео
				</A>`,
			badges: [
				{color: 'green', text: 'ТВ'},
				{color: 'purple', text: 'Видео'},
				{color: 'indigo', text: ' After Effects'},
			],
			buttonTitle: 'Смотреть',
			buttonLink: 'https://youtu.be/0VWktI5MyoA'
		},
	]

	const progress = tweened(70, {
		duration: 30_000,
		easing: sineInOut,

	});
	

	onMount(() => {
		progress.set(85)
		const observer = new IntersectionObserver((entries) => {
			console.log(entries[0].isIntersecting);
			const onScreen = entries[0].isIntersecting;
			if (onScreen) {
				progress.set(85)
			} else {
				progress.set(70, {duration: 10})
			}
		})

		observer.observe(jsProgress)
		
	})

	let jsProgress;


	

</script>

<svelte:head>
	<!-- <link rel="icon" type="image/svg+xml" href="./balloon.svg" /> -->
	<title>Соколов Алексей — Портфолио</title>
</svelte:head>
<HeroBack2 />
<section class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-screen flex justify-center items-center">
	<div class="text-center">
		<div class="flex justify-center ">
			<Avatar src="/images/ava.webp" rounded size="xl" class="object-center" dot={{color:"green", size: "xl", placement:"top-right"}}/>

		</div>
	
		<Heading tag="h1" class="mb-4 my-8" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
		  Алексей Соколов
	  </Heading>
		<P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
		  Web-motion специалист, программист плэйблов (мини-игры) <br> с опытом в видео, дизайне и инженерным бэкграундом
	  </P>
	  <Button href="t.me/polnodobra" class="xl:mr-4 sm:mx-auto mb-4">Написать в Telegram
		<svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill="#ffffff" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;margin-left:1em;"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>
	  </Button>
	  <Button href="https://github.com/xtkz"
	  	
	  >
		Смотреть GitHub
		<div style="width: 24px; height:24px;" class="ml-4">
			<svg width="98" height="96" xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.25); transform-origin: top left;"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/></svg>
		
		</div>
	  </Button>
	  
  </div>
  
</section>


<div class="container my-12 mx-auto px-4 md:px-12">
	<Heading tag="h4" class="text-center">
		Выполнил как программист:
	</Heading>
	
    <div class="flex flex-wrap -mx-1 my-4 lg:-mx-4">
    	{#each cardsDataProg as data}
			<MyCard {...data}
			/>
		{/each}

    </div>

	<Hr class="mt-12" />

	<Heading tag="h4" class="mt-12 text-center">
		Выполнил как видео-дизайнер:
	</Heading>
    <div class="flex flex-wrap -mx-1 my-4 lg:-mx-4">
    	{#each cardsDataVideo as data}
			<MyCard {...data}
			/>
		{/each}

    </div>

	<Hr class="mt-12" />

	<Heading tag="h4" class="mt-12 text-center">
		Скиллсет:
	</Heading>
	<div class="container lg:w-7/12 sm:w-10/12 mx-auto ">
		<MyProgress color="blue" myLabel="Adobe After Effects" myProgress="95"/>
		<div id="js" bind:this={jsProgress} >
			<MyProgress color="blue" myLabel="JavaScript" myProgress={$progress}/>
		</div>
		<Tooltip triggeredBy="#js" placement="bottom">
			Да, чуть-чуть растёт каждую минуту. И даже<br>во сне я думаю про event loop и setTimeOut()
		</Tooltip>
		<MyProgress color="blue" myLabel="HTML/CSS" myProgress="55"/>
		<MyProgress color="blue" myLabel="three.js" myProgress="50"/>
		<MyProgress color="blue" myLabel="Blender" myProgress="30"/>
		<MyProgress color="blue" myLabel="pixi.js" myProgress="30"/>
		<MyProgress color="blue" myLabel="git // GitHub" myProgress="25"/>
		<MyProgress color="blue" myLabel="Cinema 4D" myProgress="20"/>
		<MyProgress color="blue" myLabel="Unity" myProgress="15"/>
		<MyProgress color="blue" myLabel="Svelte" myProgress="10"/>
		<MyProgress color="blue" myLabel="React" myProgress="10"/>
		<MyProgress color="blue" myLabel="Stable Diffusion" myProgress="10"/>
		<MyProgress color="blue" myLabel="chatGPT" myProgress="10"/>

		<MyProgress color="green" myLabel="SoftSkills" myProgress="80"/>
		<MyProgress color="green" myLabel="Ответственность" myProgress="75"/>
		<MyProgress color="green" myLabel="Соблюдение дедлайнов" myProgress="95"/>
		<MyProgress color="green" myLabel="Умение делиться знаниями" myProgress="85"/>
		<MyProgress color="green" myLabel="Участие в найме" myProgress="70"/>
		<MyProgress color="green" myLabel="Стрессоустойчивость до 2022 года" myProgress="95"/>
		<MyProgress color="green" myLabel="Стрессоустойчивость сейчас" myProgress="65"/>
		<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">ведутся работы</P>
		<MyProgress color="green" myLabel="Юмор" myProgress="75"/>
		<MyProgress color="green" myLabel="Длинная полосочка для красоты" myProgress="95"/>
		
		
	</div>

</div>


