<script>
	import { Progressbar } from "flowbite-svelte";
    export let myLabel;
    export let myProgress;
    export let color;


</script>

<div class="mt-7">
    <div class="mb-1 text-lg font-medium dark:text-white">
        {myLabel}
    </div>
      <Progressbar color={color} progress={myProgress} size="h-6"/>
</div>