<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Curriculo from '@/assets/curriculo.pdf'

const menu = ref(false)

const menuRef = ref()

function openMenu () {
  if (menu.value) {
    menuRef.value.classList.remove('open')
    menuRef.value.classList.add('close')
  } else {
    menuRef.value.classList.add('open')
  }
  menu.value = !menu.value
}

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
  menuRef.value.classList.remove('open')
  menu.value = !menu.value
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
    action: openPhone,
    icon: 'phone'
  },
  {
    action: openWhatsapp,
    icon: ['fab', 'whatsapp']
  },
  {
    action: sendEmail,
    icon: 'envelope'
  },
  {
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
<header class="parent" role="banner">
  <div class="header" @click="openMenu">
    <img class="portrait" src="@/assets/portrait.jpg" />
    <h2 class="name"> Bruno S. Sousa </h2>
    <font-awesome-icon class="chevron" v-if="menu" icon="chevron-up" />
    <font-awesome-icon class="chevron" v-else icon="chevron-down" />
  </div>
  <div class="content" ref="menuRef">
    <h5 class="subInfo"> 24 anos </h5>
    <h5 class="subInfo"> Belém/PA, Brasil </h5>
    <div class="contact">
      <q-button
        v-for="contact in contacts"
        :key="contact.icon"
        class="button"
        @click="contact.action"
        type="icon"
        theme="secondary">
        <font-awesome-icon :icon="contact.icon" />
      </q-button>
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
            @click="item.action(item.ref)">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>
    <q-button @click="downloadCV" class="button" theme="secondary">
        <font-awesome-icon icon="download" />
        <span> Curriculo</span>
    </q-button>
  </div>
</header>
</template>

<style lang="scss" scoped>
@import '@/style.scss';

.parent {
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  background: $secondaryColor;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 20%);
  width: 100%;

  .header {
    display: flex;
    background: $secondaryColor;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;

    .portrait {
      margin: 8px;
      border-radius: 50%;
      width: 36px;
    }

    .name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-transform: lowercase;
      text-align: center;
      margin: 8px 0;
      color: $secondaryText;
    }

    .chevron {
      position: fixed;
      right: 0;
      color: $primaryColor;
      background: transparent;
      cursor: pointer;
      padding: 18px;
      border: none;
      text-align: left;
      outline: none;
      font-size: 15px;
      animation-name: rotateChevron;
      animation-duration: 0.5s;

      &:hover, &:active {
        background: transparent;
      }

      @keyframes rotateChevron {
        0% {
          -webkit-transform: rotateZ(-90deg);
          transform:rotate(-90deg);
        }
        100% {
          -webkit-transform: rotateZ(0);
          transform:rotate(0deg);
        }
      }
    }
  }

  .open {
    height: 300px !important;
    transition: all 0.5s ease;
  }

  .close {
    height: 0px;
    transition: all 0.5s ease;
  }
  .content {
    overflow: hidden;
    height: 0px;

    .subInfo {
      text-align: center;
      margin: 4px 0;
      color: $secondaryText;
    }

    .contact {
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
            position: relative;
          }

          .itemName{
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            padding: 10px 0;
            color: $secondaryText;

            text: {
              align: center;
              transform: lowercase;
            }
          }
        }
      }
    }
  }
}

</style>
