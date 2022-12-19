<script setup>
import { onMounted, ref } from 'vue'
import useDevice from '@/hooks/useDevice'
import SideBar from '@/components/SideBar.vue'
import MobileBar from '@/components/MobileBar.vue'

const { isMobile } = useDevice()
const content = ref()

onMounted(function upSpace () {
  if (isMobile) {
    content.value.classList.add('mobile')
  }
})

</script>

<template>
    <div class="parent">
      <MobileBar v-if="isMobile" />
      <SideBar class="menu" v-if="!isMobile" />
      <div class="content" ref="content">
        <slot></slot>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/style.scss';
$sidebarWidth: 260px;
.parent {
  display: flex;
  background: $secondaryLightColor;

  .menu {
    width: $sidebarWidth;
  }
  .content {
    margin: 20px 20px 20px ($sidebarWidth + 20px);
    width: -webkit-fill-available;
  }
}

@media (max-width: 768px) {
  .parent {
    .content {
      margin: 20px;
      width: -webkit-fill-available;
    }

    .mobile {
      margin-top: 70px;
    }
  }
}
</style>
