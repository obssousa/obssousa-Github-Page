<script setup>
import Card from '@/components/SectionCard.vue'
import CertificateCard from '@/components/CertificateCard.vue'
import { certificates } from '@/constants/certificates'

</script>

<template>
  <Card title="certificados" wrap>
    <div class="content">
      <CertificateCard
        class="certificate"
        v-for="certificate in certificates"
        :key="certificate.title"
        :title="certificate.title"
        :img="certificate.img"
        :url="certificate.url"
      />
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .certificate {
    margin: 4px 4px;
  }
}

@media (max-width: 550px) {
  .content {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
