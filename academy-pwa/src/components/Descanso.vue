<template>
  <v-flex>
    <v-card dark color="primary">
      <v-card-title>Descanso</v-card-title>
      <v-layout row>
        <v-flex xs4 offset-xs1>
          <v-select
            :items="items"
            v-model="e1"
            label="Minutos"
            single-line
          ></v-select>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-select xs5
            :items="items"
            v-model="e1"
            label="Segundos"
            single-line
          ></v-select>
      </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'App',
  computed: {
    binding () {
      const binding = {}
      binding.column = true

      return binding
    }
  },
  data () {
    return {
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ]
    }
  }
}
</script>
