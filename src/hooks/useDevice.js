import { computed, ref, onMounted } from 'vue'

export default function useDevice () {
  const windowWidth = ref()

  onMounted(() => {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth
    })
  })

  const isMobile = computed(() => windowWidth.value <= 768)

  const isExtraMobile = computed(() => windowWidth.value <= 550)

  return {
    isMobile,
    isExtraMobile
  }
}
