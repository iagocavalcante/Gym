<template>
  <v-app>
    <v-card grid-list-xl>
      <v-layout v-bind="binding">
        <v-card>
          <v-card-title class="blue white--text">
            <span class="headline">Controle de treino</span>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
        <series></series>
        <descanso></descanso>
        <treino></treino>
        <v-btn color="info">Iniciar</v-btn>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
import Series from './components/Series'
import Descanso from './components/Descanso'
import Treino from './components/Treino'
export default {
  components: {
    Series,
    Descanso,
    Treino
  },
  name: 'App',
  computed: {
    binding () {
      const binding = {}
      binding.column = true

      return binding
    }
  }
}
</script>
