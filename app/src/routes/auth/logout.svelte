<script lang="ts">
	import { goto } from "$app/navigation";
	import { firebaseApp } from "$config/firebase";
	import { getAuth, signOut } from "firebase/auth";
	import { onMount } from "svelte";

	onMount(async () => {
		await signOut(getAuth(firebaseApp));
		await goto("/auth/login");
	});
</script>
