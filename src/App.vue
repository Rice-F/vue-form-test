<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <e-form :model="model" :rules="rules">
      <e-form-item label="用户名" prop="username">
        <e-input v-model="model.username"></e-input>
      </e-form-item>
      <e-form-item label="密码" prop="password">
        <e-input v-model="model.password" type="password"></e-input>
      </e-form-item>
    </e-form>
  </div>
</template>

<script>
import EInput from './components/Input'
import EFormItem from './components/FormItem'
import EForm from './components/Form'
export default {
  name: 'app',
  components: {
    EInput,
    EFormItem,
    EForm
  },
  data () {
    return {
      value: '',
      model: {
        username: '',
        password: ''
      },
      rules: {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
