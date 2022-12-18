<script setup>
import Card from '@/components/SectionCard.vue'
import CertificateCard from '@/components/CertificateCard.vue'
import { certificates } from '@/constants/certificates'

defineProps({
  msg: String
})

</script>

<template>
  <Card class="content" title="certificados">
    <CertificateCard
      v-for="certificate in certificates"
      :key="certificate.title"
      :title="certificate.title"
      :img="certificate.img"
      :url="certificate.url"
    />
  </Card>
</template>

<style lang="scss" scoped>
.content {
    .collapse {
      width: auto;
    }
  }
</style>
