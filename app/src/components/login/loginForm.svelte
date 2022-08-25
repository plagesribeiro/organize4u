<script lang="ts">
    import { goto } from "$app/navigation";
    import {
        getAuth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
    } from "firebase/auth";
    import Button from "$components/Button/index.svelte";
    import GoogleIcon from "svelte-material-icons/Google.svelte";
    import { Input, InputWrapper } from "@svelteuidev/core";

    export let title;
    let email = "";
    let password = "";

    const auth = getAuth();

    const login = () => {
        if (title == "Login") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    localStorage.setItem("uid", user.uid);
                    goto("/");
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    localStorage.setItem("uid", user.uid);
                    goto("/");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };
</script>

<div class="content">
    <div class="infos">hello</div>
    <div class="login">
        <div class="card">
            <div class="fs-24 fw-500 c-text">{title}</div>
            <div class="fs-14 fw-500 c-light-text">
                You can login with your registered account or quick login with
                your Google account.
            </div>

            <Button disabled color="white" style="margin-top: 2rem;"
                ><GoogleIcon size="20" />Login com o google</Button
            >

            <div class="divider fs-14 fw-500 c-light-text">
                <hr style="width: 40%;" size="2" />
                or
                <hr style="width: 40%;" size="2" />
            </div>

            <Input placeholder="Your email" />
            <!--PAREI AQUI-->

            <form on:submit|preventDefault={login}>
                {#if title != "Login"}
                    <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                    </div>
                {/if}
            </form>

            {#if title == "Login"}
                <p class="signup-text c-text fs-12">
                    Ainda não é cadastrado
                    <a href="/signup" class="c-primary">Cadastre-se</a>
                </p>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        min-width: 18rem;
        height: 100%;

        .login {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 100%;

            @media (max-width: 780px) {
                width: 90%;
            }

            .card {
                width: 70%;
                height: 70%;

                @media (max-width: 780px) {
                    width: 90%;
                }

                .divider {
                    display: flex;
                    margin-top: 1rem;
                    width: 100%;
                }

                .signup-text {
                    text-align: center;
                    margin-top: 0.5rem;
                }
            }
        }

        .infos {
            width: 50%;
            background-color: blue;
            @media (max-width: 780px) {
                display: none;
            }
        }
    }
</style>
