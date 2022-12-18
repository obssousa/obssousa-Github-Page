<script setup>
import { organizations } from '@/constants/experiences'
import useDevice from '@/hooks/useDevice'
import Card from '@/components/SectionCard.vue'

const { isExtraMobile } = useDevice()

const collapseName = (organization) => {
  const desktopTitle = organization.title + ' \u25b8 ' + organization.start + ' - ' + organization.end

  return isExtraMobile.value ? organization.title : desktopTitle
}

const activeNames = ['']

</script>

<template>
  <Card class="content" title="experiência">
    <q-collapse class="collapse" v-model="activeNames" accordion>
      <q-collapse-item
        v-for="organization in organizations"
        :key="organization.title"
        :title="collapseName(organization)"
        :name="organization.title"
      >
        <span>
          {{ organization.resume }}
        </span>
        <p v-if="isExtraMobile" class="office"><b>{{ 'Tempo:\xa0' }}</b> {{ organization.start + ' - ' + organization.end }} </p>
        <p class="office"><b>{{ 'Cargo:\xa0' }}</b> {{ organization.office }} </p>
        <div class="stack">
          <h4> {{ 'Stack' }} </h4>
          <div class="item">
            <div class="skill" v-for="skill in organization.stack"
              :key="skill">
                <q-button size="small">
                  {{ skill }}
                </q-button>
                <span v-if="!isExtraMobile" class="bullet">&#9672;</span>
            </div>
          </div>
        </div>
        <div class="assignments">
          <h4> {{ 'Atribuições' }} </h4>
          <div class="item">
            <div
              class="assignment"
              v-for="assignment in organization.assignments"
              :key="assignment"
            >
                <q-button theme="secondary" size="small">
                  {{ assignment }}
                </q-button>
                <span v-if="!isExtraMobile" class="bullet">&#9679;</span>
            </div>
          </div>
        </div>
      </q-collapse-item>
    </q-collapse>
  </Card>
</template>

<style lang="scss" scoped>
.content {
    .collapse {
      width: auto;
      text-align: justify;
      text-justify: inter-word;

      .office {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .stack {
        margin-top: -4px;

        .item {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 8px 0px;

          .skill {
            &:last-child {
              .bullet {
                display: none;
              }
            }
          }

          .bullet {
            margin: 0px 5px;
          }
        }
      }

      .assignments {
        margin-top: 16px;

        .item {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 8px 0px;

          .assignment {
            &:last-child {
              .bullet {
                display: none;
              }
            }
          }

          .bullet {
            margin: 0px 8px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
  .content {
    .collapse {
      .stack {
        .item {
          gap: 8px;
        }
      }

      .assignments {
        .item {
          gap: 8px;
        }
      }
    }
  }
}
</style>
