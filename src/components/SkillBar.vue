<script setup>
import { computed, ref } from 'vue'
import BrandIcon from '@/components/BrandIcon.vue'

const props = defineProps({
  title: String,
  icon: String,
  color: {
    type: String,
    default: '#de4b7a'
  },
  years: {
    type: Number,
    default: 1
  },
  maxYears: {
    type: Number,
    default: 5
  },
  onlyNumbers: {
    type: Boolean,
    default: false
  }
})

const unfilledBars = computed(() => props.maxYears - props.years)

const fillColor = computed(() => props.onlyNumbers ? 'border-top: none; box-shadow: none;' : `border-top: 8px solid ${props.color}`)

const count = ref(0)
const getBarNumber = (index) => {
  return count.value + index
}

</script>
<template>
  <div class="parent">
    <div class="content">
      <BrandIcon :url="icon" />
      <h3 class="title"> {{ title }} </h3>
      <div
        v-for="bar in years"
        :key="bar"
        class="bar"
        :style="fillColor"
      >
        <span v-if="onlyNumbers"> {{ getBarNumber(unfilledBars + bar) }} </span>
      </div>
      <div
        v-for="bar in unfilledBars"
        :key="bar"
        class="bar unfilled"
      >
        <span v-if="onlyNumbers"> {{ getBarNumber(bar) }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 0px 8px;

  .title {
    min-width: 80px;
    text-align: left;
  }

  .bar {
    height: 4px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

    &.unfilled {
      border-top: 8px solid #bbb;
    }
  }
}

@media (max-width: 768px) {
  .content {
    padding: 0px;
  }
}
</style>
