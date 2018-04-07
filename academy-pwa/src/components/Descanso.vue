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
        { text: '01:00' },
        { text: '02:00' },
        { text: '03:00' },
        { text: '04:00' },
        { text: '05:00' },
        { text: '06:00' },
        { text: '07:00' }
      ]
    }
  }
}
</script>
