var data = { a: 1 }
var vm = new Vue({
  data: data
})

vm.a === data.a // -> true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2

// ... 反之亦然
data.a = 3
vm.a // -> 3


var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true

// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})


var vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  },
  compiled:function(){

  },
  ready:function(){

  },
  destroyed:function(){

  }
})
// -> "a is: 1"

纯文本
<span>Message: {{ msg }}</span>

单次
<span>This will never change: {{* msg }}</span>

html
<div>{{{ raw_html }}}</div>

<div id="item-{{ id }}"></div>

{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

{{ message | capitalize }}

{{ message | filterA | filterB }}

{{ message | filterA 'arg1' arg2 }}

<p v-if="greeting">Hello!</p>

<a v-bind:href="url"></a>
href="{{url}}"

<a v-on:click="doSomething">

<a v-bind:href.literal="/a/b/c"></a>

<!-- 完整语法 -->
<a v-bind:href="url"></a>

<!-- 缩写 -->
<a :href="url"></a>

<!-- 完整语法 -->
<button v-bind:disabled="someDynamicCondition">Button</button>

<!-- 缩写 -->
<button :disabled="someDynamicCondition">Button</button>

<!-- 完整语法 -->
<a v-on:click="doSomething"></a>

<!-- 缩写 -->
<a @click="doSomething"></a>

<div id="example">
  a={{ a }}, b={{ b }}
</div>
var vm = new Vue({
  el: '#example',
  data: {
    a: 1
  },
  computed: {
    // 一个计算属性的 getter
    b: function () {
      // `this` 指向 vm 实例
      return this.a + 1
    }
  }
})


<div id="demo">{{fullName}}</div>
var vm = new Vue({
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  }
})

vm.$watch('firstName', function (val) {
  this.fullName = val + ' ' + this.lastName
})

vm.$watch('lastName', function (val) {
  this.fullName = this.firstName + ' ' + val
})



var vm = new Vue({
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})

computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}

var data = { a: 1 }
var vm = new Vue({
  data: data
})

vm.a === data.a // -> true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2

// ... 反之亦然
data.a = 3
vm.a // -> 3

<div id="example">
  a={{ a }}, b={{ b }}
</div>
var vm = new Vue({
  el: '#example',
  data: {
    a: 1
  },
  computed: {
    // 一个计算属性的 getter
    b: function () {
      // `this` 指向 vm 实例
      return this.a + 1
    }
  }
})


data: {
  isA: true,
  isB: false
}
<div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>

<div v-bind:class="classObject"></div>
data: {
  classObject: {
    'class-a': true,
    'class-b': false
  }
}

<div v-bind:class="[classA, classB]">
data: {
  classA: 'class-a',
  classB: 'class-b'
}

<div v-bind:class="[classA, isB ? classB : '']">

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}

<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}

<div v-bind:style="[styleObjectA, styleObjectB]">

<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>

<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>

<h1 v-show="ok">Hello!</h1>

v-else 元素必须立即跟在 v-if 或 v-show 元素的后面——否则它不能被识别。
<div v-if="Math.random() > 0.5">
  Sorry
</div>
<div v-else>
  Not sorry
</div>


<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

<div v-for="(index, item) in items">
  {{ index }} {{ item.message }}
</div>

<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider"></li>
  </template>
</ul>

{
  items: [
    { _uid: '88f869d', ... },
    { _uid: '7496c10', ... }
  ]
}

<div v-for="item in items" track-by="_uid">
  <!-- content -->
</div>
如果没有唯一的键供追踪，可以使用 track-by="$index"，
它强制让 v-for 进入原位更新模式：片断不会被移动，
而是简单地以对应索引的新值刷新。这种模式也能处理数据数组中重复的值。


<div id="example-2">
  <button v-on:click="say('hi')">Say Hi</button>
  <button v-on:click="say('what')">Say What</button>
</div>

new Vue({
  el: '#example-2',
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
})

<button v-on:click="say('hello!', $event)">Submit</button>

// ...
methods: {
  say: function (msg, event) {
    // 现在我们可以访问原生事件对象
    event.preventDefault()
  }
}

<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat">

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">

<!-- 同上 -->
<input v-on:keyup.enter="submit">

<!-- 缩写语法 -->
<input @keyup.enter="submit">
enter
tab
delete
esc
space
up
down
left
right


<span>Message is: {{ message }}</span>
<br>
<input type="text" v-model="message" placeholder="edit me">

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames | json }}</span>


<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>


<select v-model="selected">
  <option selected>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>

<select v-model="selected" multiple>
  <option selected>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected | json }}</span>


<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>

new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})


<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>

<input
  type="checkbox"
  v-model="toggle"
  v-bind:true-value="a"
  v-bind:false-value="b">

  // 选中
vm.toggle === vm.a
// 取消选中
vm.toggle === vm.b

<input type="radio" v-model="pick" v-bind:value="a">
// 选中
vm.pick === vm.a

<select v-model="selected">
  <!-- 对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>>
</select>
// 选中
typeof vm.selected // -> 'object'
vm.selected.number // -> 123

<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model="msg" lazy>

<input v-model="age" number>

<input v-model="msg" debounce="500">


CSS 类名：

如果 show 变为 false，Vue.js 将：

调用 beforeLeave 钩子；
添加 v-leave 类名到元素上以触发过渡；
调用 leave 钩子；
等待过渡结束（监听 transitionend 事件）；
从 DOM 中删除元素并删除 v-leave 类名；
调用 afterLeave 钩子。
如果 show 变为 true，Vue.js 将：

调用 beforeEnter 钩子；
添加 v-enter 类名到元素上；
把它插入 DOM；
调用 enter 钩子；
强制一次 CSS 布局，让 v-enter 确实生效。然后删除 v-enter 类名，以触发过渡，回到元素的原始状态；
等待过渡结束；
调用 afterEnter 钩子。 
 
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


jquery

Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // 元素已被插入 DOM
    // 在动画结束后调用 done
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    // 与 enter 相同
    $(el).animate({ opacity: 0 }, 1000, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

<!-- kebab-case in HTML -->
<child my-message="hello!"></child>

<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>

<child :my-message="parentMsg"></child>


<!-- 默认为单向绑定 -->
<child :msg="parentMsg"></child>

<!-- 双向绑定 -->
<child :msg.sync="parentMsg"></child>

<!-- 单次绑定 -->
<child :msg.once="parentMsg"></child>


Vue.component('example', {
  props: {
    // 基础类型检测 （`null` 意思是任何类型都可以）
    propA: Number,
    // 必需且是字符串
    propB: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propC: {
      type: Number,
      default: 100
    },
    // 对象/数组的默认值应当由一个函数返回
    propD: {
      type: Object,
      default: function () {
        return { msg: 'hello' }
      }
    },
    // 指定这个 prop 为双向绑定
    // 如果绑定类型不对将抛出一条警告
    propE: {
      twoWay: true
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})


<!-- 子组件模板 -->
<template id="child-template">
  <input v-model="msg">
  <button v-on:click="notify">Dispatch Event</button>
</template>

<!-- 父组件模板 -->
<div id="events-example">
  <p>Messages: {{ messages | json }}</p>
  <child></child>
</div>