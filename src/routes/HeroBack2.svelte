<script>
    import * as Threlte from '@threlte/core';
    import * as THREE from 'three';
    import {tweened} from 'svelte/motion'
    import { tick, onMount } from 'svelte';
    import makeRainbowShader from './rainbowShader'

    const material1 = makeRainbowShader(200, 1.0)
    const material2 = makeRainbowShader(400, 1.2)
    const material3 = makeRainbowShader(600, 1.4)


    onMount(() => {
        let frame = requestAnimationFrame(function loop(t) {
            frame = requestAnimationFrame(loop);

            material1.uniforms.uTime.value = t/1000
            material2.uniforms.uTime.value = t/1000
            material3.uniforms.uTime.value = t/1000
        });

        return () => {
            cancelAnimationFrame(frame);
        };
    });



    const sphere1 = new THREE.Points(new THREE.IcosahedronGeometry(3.9,24), material1)
    const sphere2 = new THREE.Points(new THREE.IcosahedronGeometry(3.5,24), material2)
    const sphere3 = new THREE.Points(new THREE.IcosahedronGeometry(3.1,24), material3)

    const gridHelper = new THREE.GridHelper(20, 10);
</script>

<div>
    <Threlte.Canvas>
        <Threlte.PerspectiveCamera
            position={{x:0,y:5,z:12}} fov={50}
        >
            <Threlte.OrbitControls autoRotate/>
        </Threlte.PerspectiveCamera>
        <Threlte.Object3DInstance object={sphere1}/>
        <Threlte.Object3DInstance object={sphere2}/>
        <Threlte.Object3DInstance object={sphere3}/>
        <Threlte.Object3DInstance object={gridHelper} position={{x:0,y:-5,z:0}}/>
    </Threlte.Canvas>
</div>


<style>
	div {
		height: 95svh;
		width: 100%;
        margin: auto;
        position: absolute;
        top: 0;
        overflow: hidden;
        z-index: -1;
	}
</style>