<script lang="ts">
	export let color = 'black';
	export let width = '2em';
	export let height = '2em';
</script>

<svg
	on:click
	fill={color}
	{width}
	{height}
	viewBox="0 0 256 256"
	id="Flat"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M219.99414,55.99512v32a12,12,0,1,1-24,0v-20h-56v120h20a12,12,0,0,1,0,24h-64a12,12,0,0,1,0-24h20v-120h-56v20a12,12,0,0,1-24,0v-32a12,12,0,0,1,12-12h160A12,12,0,0,1,219.99414,55.99512Z"
	/>
</svg>
