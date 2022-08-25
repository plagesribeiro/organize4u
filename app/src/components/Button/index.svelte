<script lang="ts">
    import Loading from "$components/Loading/index.svelte";
    import { theme } from "$stores/theme";

    export let outline = false;
    export let loading = false;
    export let disabled = false;
    export let color: "primary" | "secondary" | "white" = "primary"; // primary, secondary, white
</script>

<button
    {...$$restProps}
    on:click
    class:outline
    class:disabled
    class:bc-text={outline}
    class:c-text={outline}
    class:bg-hover-secondary={outline && !disabled}
    class:c-black={(color === "secondary" && $theme === "light") ||
        color === "white"}
    class="bg-{color} bg-hover-{color} c-white fs-16 fw-500"
>
    {#if loading}
        <Loading color="white" size={32} />
    {:else}
        <slot />
    {/if}
</button>

<style lang="scss">
    button {
        border: none;
        height: var(--height, 3rem);
        width: var(--width, 100%);
        border-radius: 8px;
        transition: background-color 200ms;
        padding: 0 var(--padding, 6px);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--gap, 8px);
        cursor: pointer;
    }

    .disabled {
        opacity: 0.7;
        cursor: unset;
    }

    .outline {
        background-color: transparent;
        border: 1px solid;
    }
</style>
