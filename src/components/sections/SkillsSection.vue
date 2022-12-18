<script setup>
import useDevice from '@/hooks/useDevice'
import { skills, maxYears } from '@/constants/skills'
import Card from '@/components/SectionCard.vue'
import SkillBar from '@/components/SkillBar.vue'

const { isExtraMobile } = useDevice()

const orderedSkills = skills.sort((a, b) => b.years - a.years)

</script>

<template>
  <Card class="content" title="habilidades">
    <div class="yearBar">
      <component
        class="descriptionLabel"
        :is="isExtraMobile ? 'h4' : 'h2'"
      >
        Experiência em Anos
      </component>
      <SkillBar
        :years="maxYears"
        :maxYears="maxYears"
        only-numbers
      />
    </div>
    <SkillBar
      v-for="skill in orderedSkills"
      :key="skill.title"
      :title="skill.title"
      :icon="skill.icon"
      :color="skill.color"
      :years="skill.years"
      :maxYears="skill.maxYears"
    />
  </Card>
</template>

<style lang="scss" scoped>
.content {
  .yearBar {
    .descriptionLabel {
      padding: 0 16px;
      text-align: right;
    }
  }
}

@media (max-width: 768px) {
  .content {
    .yearBar {
      .descriptionLabel {
        padding: 0;
      }
    }
  }
}
</style>
