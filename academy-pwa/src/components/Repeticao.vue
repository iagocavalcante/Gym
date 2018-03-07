<template>
  <v-flex>
    <v-card dark color="primary">
      <v-card-title>Repetições</v-card-title>
      <v-layout row>
        <v-flex xs10 offset-xs1>
          <v-select
            :items="items"
            v-model="e1"
            label="Número de repetições"
            single-line
          ></v-select>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Repeticao',
  computed: {
    binding () {
      const binding = {}
      binding.column = true

      return binding
    }
  },
  data () {
    return {
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      items: [
        { text: '01' },
        { text: '02' },
        { text: '03' },
        { text: '04' },
        { text: '05' },
        { text: '06' },
        { text: '07' },
        { text: '08' },
        { text: '09' },
        { text: '10' },
        { text: '11' },
        { text: '12' },
        { text: '13' },
        { text: '14' },
        { text: '15' }
      ]
    }
  }
}
</script>
