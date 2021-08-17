<template>
  <CommonLayout>
    <div>this is home page.</div>
  </CommonLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import CommonLayout from '@/components/layout/CommonLayout.vue'

export default defineComponent({
  components: {
    CommonLayout,
  },
})
</script>

<style scoped lang="scss"></style>
