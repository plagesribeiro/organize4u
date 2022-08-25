<script lang="ts">
	export let color = "black";
	export let unit = "px";
	export let duration = "0.6s";
	export let size = 60;

	const moonSize = +size / 7;
	const top = +size / 2 - moonSize / 2;
</script>

<div
	class="wrapper"
	style:--size="var(--height, {size}{unit})"
	style:--color={color}
	style:--moonSize="{top}{unit}"
	style:--duration={duration}
>
	<div class="circle-one" />
	<div class="circle-two" />
</div>

<style>
	.wrapper {
		height: var(--size, 60px);
		width: var(--size, 60px);
		border-radius: 100%;
		animation: moonStretchDelay var(--duration) 0s infinite linear;
		animation-fill-mode: forwards;
		position: relative;
	}
	.circle-one {
		top: var(--moonSize);
		background-color: var(--color);
		width: calc(var(--size) / 7);
		height: calc(var(--size) / 7);
		border-radius: 100%;
		animation: moonStretchDelay var(--duration) 0s infinite linear;
		animation-fill-mode: forwards;
		opacity: 0.8;
		position: absolute;
	}
	.circle-two {
		opacity: 0.1;
		border: calc(var(--size) / 7) solid var(--color);
		height: var(--size);
		width: var(--size);
		border-radius: 100%;
		box-sizing: border-box;
	}
	@keyframes moonStretchDelay {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
