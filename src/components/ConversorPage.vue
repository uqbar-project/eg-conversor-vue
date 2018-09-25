<template>
    <div>
        <h2 id="titulo">Conversor de millas a kilómetros</h2>
        <form>
            <div class="form-group">
                <label class="form-check-label">Millas</label>
                <input type="text" v-model="conversor.millas" class="form-control" id="millas"/>
            </div>
            <div class="form-group">
                <button @click="conversor.convertir()" type="button" class="btn btn-primary" id="convertir">Convertir
                </button>
            </div>
            <div class="form-group">
                <div class="alert alert-info" role="alert">
                    <b>Kilómetros: </b><span id="kilometros">{{conversor.kilometros}}</span>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
	import Vue from "vue"
	import Component from 'vue-class-component'

	class Conversor {
		millas = 0
		kilometros = 0

		convertir() {
			this.kilometros = this.millas * 1.603944
		}
	}

	@Component
	export default class ConversorPage extends Vue {
		conversor = new Conversor()
	}
</script>

<style>
    #app {
        background-color: white;
        padding: 2rem;
        margin: 2rem;
    }
</style>