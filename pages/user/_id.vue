<template>
  <CommonLayout>
    <div>this is user detail page.</div>
    <div>userName: {{ userName }}</div>
    <NuxtLink to="/user">
      <div>back to user page.</div>
    </NuxtLink>
  </CommonLayout>
</template>

<script lang="ts">
import { defineComponent, ref, useRoute } from '@nuxtjs/composition-api'
import CommonLayout from '@/components/layout/CommonLayout.vue'

export default defineComponent({
  components: {
    CommonLayout,
  },
  setup() {
    const route = useRoute()
    const { id } = route.value.params

    const userName = ref<string>(`User${id}`)

    return {
      userName: userName,
    }
  },
})
</script>

<style scoped lang="scss"></style>
