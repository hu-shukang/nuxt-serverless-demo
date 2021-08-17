<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li>
        <NuxtLink to="/">
          <div>Home</div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user">
          <div>User</div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/setting">
          <div>Setting</div>
        </NuxtLink>
      </li>
    </ul>
    <hr />
    <div>
      <slot> default slot area </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const title = ref<string>('Nuxt + SSR + Lambda + API Gateway')
    return {
      title: title,
    }
  },
})
</script>

<style scoped lang="scss"></style>
