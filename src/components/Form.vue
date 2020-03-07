<template>
  <form action="">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'pack-form',
  provide () {
    return {
      EForm: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
#pack-form {

}
</style>
