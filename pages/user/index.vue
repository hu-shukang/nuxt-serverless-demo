<template>
  <CommonLayout>
    <div>this is user page.</div>
    <ul>
      <li>
        <NuxtLink to="/user/1">
          <div>User 1</div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user/2">
          <div>User 2</div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user/3">
          <div>User 3</div>
        </NuxtLink>
      </li>
    </ul>
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
