<template>
  <v-flex>
    <v-card dark color="primary">
      <v-card-title>Tempo de descanso</v-card-title>
      <v-layout row>
        <v-flex xs4 offset-xs1>
          <v-select
            :items="minutos"
            v-model="minutos"
            label="Minutos"
            single-line
          ></v-select>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-select xs5
            :items="segundos"
            v-model="segundos"
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
      minutos: [
        { text: '00' },
        { text: '05' },
        { text: '10' },
        { text: '15' },
        { text: '20' },
        { text: '25' },
        { text: '30' },
        { text: '35' },
        { text: '40' },
        { text: '45' },
        { text: '50' },
        { text: '55' },
        { text: '60' }
      ],
      segundos: [
        { text: '00' },
        { text: '05' },
        { text: '10' },
        { text: '15' },
        { text: '20' },
        { text: '25' },
        { text: '30' },
        { text: '35' },
        { text: '40' },
        { text: '45' },
        { text: '50' },
        { text: '55' },
        { text: '60' }
      ]
    }
  }
}
</script>
