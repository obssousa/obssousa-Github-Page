<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import CertificateSection from '@/components/sections/CertificateSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'

</script>

<template>
  <DefaultLayout>
    <div>
      <ExperienceSection id="experience" />
      <SkillsSection id="skills" />
      <CertificateSection id="certificates" />
    </div>
  </DefaultLayout>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
