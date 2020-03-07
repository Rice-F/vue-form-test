<template>
  <div id="form-item">
    <label for="">{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errStatus">{{errMsg}}</p>
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'form-item',
  inject: ['EForm'],
  props: ['label', 'prop'],
  data () {
    return {
      errMsg: '',
      errStatus: false
    }
  },
  mounted () {
    this.$on('validate', this.validator)
  },
  methods: {
    // 验证规则
    validator () {
      // console.log(this)
      const rules = this.EForm.rules[this.prop]
      const value = this.EForm.model[this.prop]
      // 验证的描述对象 验证规则
      const descriptor = { [this.prop]: rules }
      const schema = new Schema(descriptor)
      schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMsg = errors[0].message
          this.errStatus = true
        } else {
          this.errMsg = ''
          this.errStatus = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#form-item {

}
</style>
