<script>
	import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core'
	import { spring } from 'svelte/motion'
	// import { degToRad } from 'three/src/math/MathUtils'


</script>

<div>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
			<OrbitControls maxPolarAngle={80/51} enableZoom={false} autoRotate />
		</T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<!-- Cube -->
		<T.Group scale={17}>
			<T.Points geometry={}>
				<!-- Add interaction -->
				
				<T.SphereGeometry heightSegments={120}/>
				<T.PointsMaterial size={0.5} sizeAttenuation/>
			</T.Points>
		</T.Group>

	</Canvas>
</div>

<style>
	div {
		height: 95svh;
		width: 98vw;
        margin: auto;
        position: absolute;
        top: 0;
        overflow: hidden;
        z-index: -1;
	}
</style>