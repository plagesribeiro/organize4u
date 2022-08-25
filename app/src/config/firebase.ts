// Import the functions you need from the SDKs you need
import { browser } from "$app/env";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { readable } from "svelte/store";

const firebaseConfig = {
    apiKey: "AIzaSyCbtvGlhSCKhJUYAMjE8XzFfURqHUAmQDU",
    authDomain: "helpyourstore-481f0.firebaseapp.com",
    projectId: "helpyourstore-481f0",
    storageBucket: "helpyourstore-481f0.appspot.com",
    messagingSenderId: "1031156134128",
    appId: "1:1031156134128:web:9b011c99bfeda7e8545235"
};

export const firebaseApp = initializeApp(firebaseConfig)

const auth = browser && getAuth(firebaseApp)

export const authentication = readable<typeof auth.currentUser | false>(auth?.currentUser ?? undefined, (set) => {
    if (!auth) {
        return undefined
    }

    set(auth.currentUser ?? undefined)
    return onAuthStateChanged(auth, (user) => set(user ?? false))
})