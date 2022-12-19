<script setup>

defineProps({
  title: String,
  wrap: {
    type: Boolean,
    default: false
  }
})

</script>
<template>
  <div class="card">
    <h1> {{ '#'+title }}</h1>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style.scss';
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 24px;
  color: $secondaryText;
  background-color: $secondaryColor;

  .content {
    text-align: center;
    margin: 24px;
  }
}

@media (max-width: 768px) {
  .card {
    padding: 16px;
    .content {
      text-align: center;
      margin: 0px;
    }
  }
}
</style>
