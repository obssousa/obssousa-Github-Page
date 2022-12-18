<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
// const route = useRoute()

const navigateToHash = (hash) => {
  console.log(`#${hash}`)
  router.push({ path: '/', hash: `#${hash}` })
}

const sendEmail = () => {
  window.location = 'mailto:obssousa@pm.me'
}

const openLinkedin = () => {
  window.open('https://www.linkedin.com/in/obssousa', '_blank')
}

const openTelegram = () => {
  window.open('https://t.me/obssousa', '_blank')
}

const openPhone = () => {
  window.open('tel:+5591985037834')
}

</script>

<template>
<header class="header" role="banner">
  <img class="portrait" src="@/assets/portrait.jpg" />
  <h1 class="name"> Bruno S. Sousa </h1>
  <h5 class="telephone"> 24 anos </h5>
  <div class="openContact">
    <div class="contact">
      <q-button class="button" size="small" @click="openPhone" type="icon" theme="secondary">
        <font-awesome-icon icon="phone" />
      </q-button>
      <span>(91) 985037834</span>
    </div>
    <div class="contact">
      <q-button class="button" size="small" @click="sendEmail" type="icon" theme="secondary">
        <font-awesome-icon icon="envelope" />
      </q-button>
      <span>obssousa@pm.me</span>
    </div>
    <div class="contact">
      <q-button class="button" size="small" @click="openLinkedin" type="icon" theme="secondary">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
      </q-button>
      <span>@obssousa</span>
    </div>
    <div class="contact">
      <q-button class="button" size="small" @click="openTelegram" type="icon" theme="secondary">
          <font-awesome-icon :icon="['fab', 'telegram']" />
      </q-button>
      <span>@obssousa</span>
    </div>
  </div>
  <hr class="divider" />
  <div class="nav-wrap">
    <nav class="main-nav" role="navigation">
      <ul class="unstyled list-hover-slide">
        <li>
          <a
            @mouseover="navigateToHash('experience')"
            @click="navigateToHash('experience')">
            Experiência
          </a>
        </li>
        <li>
          <a
            @mouseover="navigateToHash('skills')"
            @click="navigateToHash('skills')">
            Habilidades
          </a>
        </li>
        <li>
          <a
            @mouseover="navigateToHash('certificates')"
            @click="navigateToHash('certificates')">
            Certificados
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <q-button class="button" theme="secondary">
      <font-awesome-icon icon="download" />
      <span>Curriculo</span>
  </q-button>
</header>
</template>

<style lang="scss" scoped>
// COLORS
$orange: #DF4500;
$gray: #35302D;
$gray-shine: #3C3735;
$white-off: #DFDBD9;

// REUSABLE STYLES
.unstyled{ list-style: none; padding: 0; margin: 0;
  a{ text-decoration: none; }
}
.list-inline{ overflow: hidden;
  li{ float: left; }
}

// HEADER STYLES
.header{
  position: fixed;
  left: 0; top: 0; bottom: 0;
  background: $gray;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 20%);
  min-width: 260px;

  .portrait {
    margin: 20px;
    border-radius: 50%;
    width: -webkit-fill-available;
  }

  .name {
    text-transform: lowercase;
    text-align: center;
    margin: 0;
    color: $white-off;
  }

  .telephone {
    text-align: center;
    margin: 4px 0;
    color: $white-off;
  }

  .openContact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .contact {
      margin: 4px 4px 4px 60px;
      text-align: center;
      color: $white-off;

      > .button {
        margin-right: 8px;
      }
    }
  }

  .divider {
    border-top: 8px solid #fff;
    border-radius: 5px;
  }

  > .button {
    width: -webkit-fill-available;
    margin: 8px;
  }
}

// MAIN NAV
.main-nav{

  ul{
    border-top: solid 1px $gray-shine;
  }

  li{
    border-bottom: solid 1px $gray-shine;
  }

  a{
    padding: 1.1em 0;
    color: $white-off;
    font: 400 1.125em;
    text: {
      align: center;
      transform: lowercase;
    }

    &:hover{
      color: #fff;
    }
  }
}

// HOVER SLIDE EFFECT
.list-hover-slide{

  li{
    position: relative;
    overflow: hidden;
  }

  a{
    display: block;
    position: relative;
    z-index: 1;
    transition: .35s ease color;

    &:before{
      content: '';
      display: block;
      z-index: -1;
      position: absolute;
      left: -100%; top: 0;
      width: 100%; height: 100%;
      border-right: solid 5px $orange;
      background: $gray-shine;
      transition: .35s ease left;
    }

    &.is-current,
    &:hover{

      &:before{
        left: 0;
      }
    }
  }
}

</style>
