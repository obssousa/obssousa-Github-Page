<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Curriculo from '@/assets/curriculo.pdf'

const navItemRef = {
  experience: ref(null),
  skills: ref(null),
  certificates: ref(null)
}
const router = useRouter()

function navigateToHash (hash) {
  Object.keys(navItemRef).forEach((ref) => {
    navItemRef[ref].value[0].classList.remove('active')
  })
  navItemRef[hash].value[0].classList.add('active')
  router.push({ path: '/', hash: `#${hash}` })
}

function sendEmail () {
  window.location = 'mailto:obssousa@pm.me'
}

function openLinkedin () {
  window.open('https://www.linkedin.com/in/obssousa', '_blank')
}

async function downloadCV () {
  const a = document.createElement('a')
  a.style = 'display: none'
  a.href = Curriculo
  a.download = 'Currículo - Bruno Santos de Sousa'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

function openWhatsapp () {
  window.open('https://wa.me/5591985037834', '_blank')
}

function openPhone () {
  window.open('tel:+5591985037834')
}

const contacts = reactive([
  {
    text: '(91) 985037834',
    action: openPhone,
    icon: 'phone'
  },
  {
    text: '(91) 985037834',
    action: openWhatsapp,
    icon: ['fab', 'whatsapp']
  },
  {
    text: 'obssousa@pm.me',
    action: sendEmail,
    icon: 'envelope'
  },
  {
    text: '@obssousa',
    action: openLinkedin,
    icon: ['fab', 'linkedin']
  }
])

const navigationItems = reactive([
  {
    text: 'Experiência',
    action: navigateToHash,
    ref: 'experience'
  },
  {
    text: 'Habilidades',
    action: navigateToHash,
    ref: 'skills'
  },
  {
    text: 'Certificados',
    action: navigateToHash,
    ref: 'certificates'
  }
])

</script>

<template>
<header class="header" role="banner">
  <img class="portrait" src="@/assets/portrait.jpg" />
  <h1 class="name"> Bruno S. Sousa </h1>
  <h5 class="subInfo"> 24 anos </h5>
  <h5 class="subInfo"> Belém/PA, Brasil </h5>
  <div
    class="openContact"
    v-for="contact in contacts"
    :key="contact.icon"
    >
    <div class="contact">
      <q-button
        class="button"
        size="small"
        @click="contact.action"
        type="icon"
        theme="secondary">
        <font-awesome-icon :icon="contact.icon" />
      </q-button>
      <span>{{ contact.text }}</span>
    </div>
  </div>
  <nav class="navigation">
    <ul class="groupItem">
      <li
        class="item"
        v-for="item in navigationItems"
        :key="item.ref"
        :ref="navItemRef[item.ref]"
      >
        <a
          class="itemName"
          @mouseover="item.action(item.ref)"
          @click="item.action">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
  <q-button @click="downloadCV" class="button" theme="secondary">
      <font-awesome-icon icon="download" />
      <span> Curriculo</span>
  </q-button>
</header>
</template>

<style lang="scss" scoped>
@import '@/style.scss';

.header {
  position: fixed;
  left: 0; top: 0; bottom: 0;
  background: $secondaryColor;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 20%);
  min-width: 260px;

  .portrait {
    margin: 16px 8px 4px 8px;
    border-radius: 50%;
    width: -webkit-fill-available;
  }

  .name {
    text-transform: lowercase;
    text-align: center;
    margin: 0;
    color: $secondaryText;
  }

  .subInfo {
    text-align: center;
    margin: 4px 0;
    color: $secondaryText;
  }

  .openContact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .contact {
      margin: 4px 4px 4px 60px;
      text-align: center;
      color: $primaryLightColor;

      > .button {
        background-color: $primaryColor;
        color: $secondaryColor;
        margin-right: 8px;
        --box-shadow-default: none;

        &:hover, &:active{
          --box-shadow-pressed: none;
          color: $secondaryLightColor;
          background: $primaryLightColor;
          box-shadow: 2px 2px 3px $primaryDarkColor;
        }
      }
    }
  }

  > .button {
    width: -webkit-fill-available;
    margin: 8px;
    background-color: $primaryColor;
    color: $secondaryColor;
    margin-right: 8px;
    --box-shadow-default: none;

    &:hover, &:active{
      --box-shadow-pressed: none !important;
      color: $secondaryLightColor !important;
      background: $primaryLightColor !important;
      box-shadow: 2px 2px 3px $primaryDarkColor !important;
    }

    &:active {
      background-color: none;
    }
  }
  .navigation {
    margin: 8px 0px;
    .groupItem {
      padding: 0;
      margin: 0;
      .item {
        position: relative;
        overflow: hidden;
        border-bottom: solid 1px $primaryDarkColor;

        &:last-child {
          border-bottom: none;
        }

        &.active {
          display: block;
          background: $secondaryLightColor;
          transition: .65s ease left;
          position: relative;
          z-index: 1;
        }

        .itemName{
          display: flex;
          flex-direction: row;
          justify-content: center;
          text-decoration: none;
          padding: 10px 0;
          color: $secondaryText;
          z-index: 1;

          text: {
            align: center;
            transform: lowercase;
          }

          &:before {
            content: '';
            display: block;
            z-index: -1;
            position: absolute;
            right: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background: $secondaryLightColor;
            transition: .65s ease right;
          }

          &:hover {
            &:before {
              right: 0;
            }
          }
        }
      }
    }
  }
}

</style>
