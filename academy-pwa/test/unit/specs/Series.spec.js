import Vue from 'vue'
import Series from '@/components/Series'

describe('Series.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Series)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#series-title').textContent)
      .to.equal('Séries')
  })
})
