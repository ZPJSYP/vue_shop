import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// $message为自定义属性，把弹框组件挂载到vue的原型对象上，所有组建都可以通过this.$message来访问弹框组件。
Vue.prototype.$message = Message
