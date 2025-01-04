<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import CertificateSection from '@/components/sections/CertificateSection.vue'

</script>

<template>
  <DefaultLayout>
    <div>
      <ExperienceSection id="experience" />
      <CertificateSection id="certificates" />
    </div>
  </DefaultLayout>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
