<script lang="ts">
	import "../../app.scss";
	import { navigating } from "$app/stores";
	import { theme } from "$stores/theme/index";

	$: classTheme = $theme === "dark" ? "dark-mode" : `light-mode`;
</script>

<svelte:head>
	{#key $navigating}
		<title>HYS</title>
	{/key}
</svelte:head>

<div class={classTheme}>
	<slot />
</div>
