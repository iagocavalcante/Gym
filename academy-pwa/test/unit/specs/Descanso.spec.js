import Vue from 'vue'
import Descanso from '@/components/Descanso'

describe('Descanso.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Descanso)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#descanso-title').textContent)
      .to.equal('Descanso')
  })
})
