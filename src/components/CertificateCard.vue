<script setup>

const props = defineProps({
  img: String,
  title: String,
  url: String
})

const openCertificate = () => {
  window.open(props.url, '_blank')
}

</script>
<template>
  <div class="parent">
    <img class="icon" :src="img"  @click="openCertificate" />
    <span class="dot" @click="openCertificate">&#9679;</span>
    <h5 class="title" @click="openCertificate">{{ title }}</h5>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  display: flex;
  align-items: center;
  gap: 0px 4px;
  padding: 8px 16px;
  .icon {
    width: 100%;
    max-width: 36px;
    cursor: pointer;
  }

  .dot {
    cursor: pointer;
  }

  .title {
    margin: 3px 0px 0px;
    cursor: pointer;
  }
}

</style>
