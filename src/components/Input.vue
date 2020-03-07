<template>
  <div id="pack-input">
    <input :type="type" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'pack-input',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      // value: ''
    }
  },
  methods: {
    onInput (e) {
      // console.log(e)
      const value = e.target.value
      this.$emit('input', value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang="scss" scoped>
#pack-input {

}
</style>
