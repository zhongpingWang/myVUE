var vm= new Vue({
  el: '#app',
  data: {
  	greeting:false,
    //vm.$data.greeting=true
    message: 'Hello Vue.js!',
      todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue.js' },
      { text: 'Build Something Awesome' }
    ]
  },
   methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


Vue.transition('expand', {

  beforeEnter: function (el) {
    el.textContent = 'beforeEnter'
  },
  enter: function (el) {
    el.textContent = 'enter'
  },
  afterEnter: function (el) {
    el.textContent = 'afterEnter'
  },
  enterCancelled: function (el) {
    // handle cancellation
  },

  beforeLeave: function (el) {
    el.textContent = 'beforeLeave'
  },
  leave: function (el) {
    el.textContent = 'leave'
  },
  afterLeave: function (el) {
    el.textContent = 'afterLeave'
  },
  leaveCancelled: function (el) {
    // handle cancellation
  }
})
 

 new Vue({
  el: '#todo',
  data: {
    newTodo: '',
    todos: [
      { text: 'Add some todos' }
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})


new Vue({
    el: '#demo',
    data: {
        query: '',
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    }
})

// 定义
// var MyComponent = Vue.extend({
//   template: '<div>A custom component!</div>'
// })

// // 注册
// Vue.component('my-component', MyComponent)


// 在一个步骤中扩展与注册  语法糖
Vue.component('my-component', {
   props: ['msg'],
  template: '<div>A custom component! {{msg}}</div>'
})


// 创建根实例
new Vue({
  el: '#example2'
})