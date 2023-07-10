<script>
	import { Card, Button, Badge, Span, P } from "flowbite-svelte";
    export let image;
    export let title;
    export let text;
    export let badges;
    export let buttonTitle;
    export let buttonLink;
</script>

<!-- Column -->
<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

    <!-- Article -->
    <div>
    <Card img={image}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {@html title}
        </h5>
        <P class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {@html text}
        </P>
        <div>
            {#each badges as badgeData}
                <Badge color={badgeData.color} class="mr-1">
                    {badgeData.text}
                </Badge>
            {/each}
            
        </div>
        <Button class="mt-4" href={buttonLink} target="_blank">
        {buttonTitle} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </Button>
    </Card>
    
    </div>
    <!-- END Article -->

</div>
<!-- END Column -->