new Vue({
  el: '#taskList',
  data: {
    title: 'to do list',
    tasks: [
      { name: 'Academia' },
      { name: 'Ir ao Mercado' },
      { name: 'Trabalhar' }
    ]
  },
  methods: {
    newItem: function () {
      if (!this.tasks.name) {
        return
      }
      this.tasks.push({
        name: this.tasks.name,
        del: ''
      })
      this.tasks.name = ''
    },
    delItem: function (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
})
