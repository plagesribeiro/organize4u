<script lang="ts">
	import Global from "$components/Global/index.svelte";
	import { goto } from "$app/navigation";
	import { browser } from "$app/env";
	import { authentication } from "$config/firebase";
	import { switchTheme, theme } from "$stores/theme";

	let pageLoaded = false;

	$: if (browser && $authentication !== undefined) {
		if ($authentication) {
			console.log("welcome");
		} else {
			goto("/auth/logout");
		}
		pageLoaded = true;
	}
</script>

<Global>
	<div class="screen bg-background">
		<div class="header">
			<div
				on:click={switchTheme}
				class="menu-item c-off-secondary"
				role="menuitem"
			>
				<div class="left">
					<div class="icon">ass</div>
					<span>{$theme === "dark" ? "Light mode" : "Dark mode"}</span
					>
				</div>
			</div>
		</div>
		<div class="slot">
			{#if pageLoaded}
				<slot />
			{:else}
				Loading
			{/if}
		</div>
	</div>
</Global>

<style>
	.screen {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		height: 48px;
	}

	.slot {
		padding: 1rem;
		width: calc(100% - 2rem);
		height: calc(100% - 2rem);
	}
</style>
