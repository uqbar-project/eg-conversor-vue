<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" style="height: 2em; width: 2em;">
        <ConversorPage/>
    </div>
</template>
<script lang="ts">

	import {Component, Vue} from "vue-property-decorator";
	import ConversorPage from "./components/ConversorPage.vue";

	@Component({
		components: {
			ConversorPage
		}
	})
	export default class App extends Vue {
	}
</script>

<style>
    body {
        background-color: aliceblue;
    }
</style>
