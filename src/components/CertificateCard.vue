<script setup>

const props = defineProps({
  img: String,
  title: String,
  url: String
})

function openCertificate () {
  window.open(props.url, '_blank')
}

</script>
<template>
  <div class="parent" @click="openCertificate">
    <img class="icon" :src="img"/>
    <span>&#9679;</span>
    <h5 class="title">{{ title }}</h5>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style.scss';
.parent {
  display: flex;
  align-items: center;
  gap: 0px 4px;
  padding: 4px 16px;
  background: $primaryColor;
  color: $primaryText;
  border-radius: 16px;
  cursor: pointer;
  max-width: 450px;

  &:hover {
    background: $primaryLightColor;
  }

  .icon {
    width: 100%;
    max-width: 36px;
  }

  .title {
    margin: 3px 0px 0px;
  }
}

</style>
