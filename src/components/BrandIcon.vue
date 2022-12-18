<script setup>

defineProps({
  url: String
})

</script>
<template>
  <img class="icon" :src="url" />
</template>

<style lang="scss" scoped>
.icon {
  width: 100%;
  max-width: 16px;
}
</style>
