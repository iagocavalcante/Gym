import Vue from 'vue'
import Treino from '@/components/Treino'

describe('Treino.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Treino)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#series-title').textContent)
      .to.equal('Séries')
  })
})
