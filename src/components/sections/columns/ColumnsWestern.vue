<script>
import * as types from '@editor/types'
import * as _ from 'lodash-es'
import Seeder from '@editor/seeder'
import defaults from '../../mixins/defaults'
import sectionMedia from '../../mixins/sectionMedia'

const C_CUSTOM_COLUMN = [
  {
    element: {
      styles: {
        'background-image': 'url(https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/6236dcf6-e6c3-4f78-9efc-ba23d325cc8e.jpg)',
        'background-color': 'rgba(0, 0, 0, 0)',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'width': '336px',
        'height': '186px'
      },
      media: {
        'is-mobile': {
          'width': '336px',
          'height': '186px'
        }
      }
    }
  },
  {
    element: {
      text: '<h2><strong>This is a header</strong></h2>',
      styles: {
        'font-size': '3.2rem',
        'color': '#ffffff'
      },
      media: {
        'is-mobile': {
          'font-size': '3.2rem'
        }
      }
    }
  },
  {
    element: {
      text: 'An sincerity so extremity he additions.' +
      '<div>Her yet there truth merit.</div>' +
      '<div>Mrs all projecting favourable now unpleasing.</div>',
      styles: {
        'text-align': 'left',
        'font-size': '1.6rem',
        'color': '#ffffff'
      },
      media: {
        'is-mobile': {
          'text-align': 'left'
        }
      }
    }
  },
  {},
  {
    element: {
      text: '<p><strong>SECONDARY BUTTON</strong></p>',
      styles: {
        'background-color': 'transparent',
        'color': '#1A83FF',
        'font-size:': '1.6rem',
        'text-align': 'center',
        'width': '280px',
        'height': '64px',
        'border-radius': '10px',
        'border-width': '2px',
        'border-style': 'solid',
        'border-color': '#1A83FF'
      },
      pseudo: {
        hover: {
          'color': '#FFFFFF !important',
          'border-width': '2px !important',
          'border-style': 'solid !important',
          'border-color': '#FFFFFF !important'
        }
      }
    }
  }
]

const C_CUSTOM_COLUMN2 = _.cloneDeep(C_CUSTOM_COLUMN)
C_CUSTOM_COLUMN2[0].element.styles['background-image'] = 'url(https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/57d0f7af-b3a3-49b2-879e-e9fe0b8a2752.jpg)'

const C_CUSTOM_COLUMN3 = _.cloneDeep(C_CUSTOM_COLUMN)
C_CUSTOM_COLUMN3[0].element.styles['background-image'] = 'url(https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/3e5d9cd0-aaad-402b-a26a-8b5e49415cba.jpg)'

const C_CUSTOM = [{
  element: {
    styles: {
      height: '60px'
    }
  }
}]

const C_CUSTOM_CONTAINER = {
  styles: {
    'flex-direction': 'column',
    'align-items': 'center'
  }
}

const C_CUSTOM_CONTAINER_2 = {
  styles: {
    'flex-direction': 'column',
    'align-items': 'flex-start'
  },
  media: {
    'is-mobile': {
      'align-items': 'center'
    }
  }
}

const SCHEMA_CUSTOM = {
  mainStyle: {
    styles: {
      'padding-bottom': '122px'
    },
    count: 3
  },
  container: _.merge({}, C_CUSTOM_CONTAINER),
  container1: _.merge({}, C_CUSTOM_CONTAINER_2),
  container2: _.merge({}, C_CUSTOM_CONTAINER_2),
  container3: _.merge({}, C_CUSTOM_CONTAINER_2),
  container4: _.merge({}, C_CUSTOM_CONTAINER_2),
  components: _.merge({}, C_CUSTOM),
  components1: _.merge({}, C_CUSTOM_COLUMN),
  components2: _.merge({}, C_CUSTOM_COLUMN2),
  components3: _.merge({}, C_CUSTOM_COLUMN3),
  components4: _.merge({}, C_CUSTOM_COLUMN),
  edited: true
}

const COMPONENTS = [
  {
    name: 'Logo',
    element: types.Logo,
    type: 'image',
    class: 'b-logo',
    label: 'logo'
  },
  {
    name: 'TextElement',
    element: types.Text,
    type: 'text',
    class: 'b-title',
    label: 'title'
  },
  {
    name: 'TextElement',
    element: types.Text,
    type: 'text',
    class: 'b-text',
    label: 'description'
  },
  {
    name: 'Delimiter',
    element: types.Delimiter,
    type: 'delimiter',
    class: 'b-delimiter',
    label: 'delimiter'
  },
  {
    name: 'Button',
    element: types.Button,
    type: 'button',
    class: 'b-button-test',
    label: 'button'
  }
]

const HEADER = [
  {
    name: 'Delimiter',
    element: types.Delimiter,
    type: 'delimiter',
    class: 'b-delimiter',
    label: 'delimiter'
  }
]

const GROUP_NAME = 'Columns'
const NAME = 'ColumnsWestern'

export default {
  name: NAME,

  group: GROUP_NAME,

  description: 'Three columns additional features presentation',

  mixins: [defaults, sectionMedia],

  cover: '/img/covers/columns-western.jpg',

  $schema: {
    mainStyle: types.Columns,
    container: types.StyleObject,
    container1: types.StyleObject,
    container2: types.StyleObject,
    container3: types.StyleObject,
    container4: types.StyleObject,
    components: _.merge([], HEADER),
    components1: _.merge([], COMPONENTS),
    components2: _.merge([], COMPONENTS),
    components3: _.merge([], COMPONENTS),
    components4: _.merge([], COMPONENTS)
  },

  created () {
    if (this.$sectionData.edited === undefined) {
      Seeder.seed(_.merge(this.$sectionData, SCHEMA_CUSTOM))
    }
  }
}
</script>

<template>
  <section
    class="b-columns"
    :class="$sectionData.mainStyle.classes"
    :style="[$sectionData.mainStyle.styles, $sectionData.objVarsMedia]"
    v-styler:section="$sectionData.mainStyle"
  >
    <slot name="menu"/>
    <slot name="video"/>
    <slot name="overlay"/>
    <div class="b-grid">
      <div class="b-grid__row">
        <sandbox
          class="b-sandbox"
          container-path="$sectionData.container"
          components-path="$sectionData.components"
        >

          <draggable v-model="$sectionData.components" class="b-draggable-slot" :style="$sectionData.container.styles" @start="$_drag('components')" @change="$_dragStop">
            <div :class="`b-draggable-slot__${component.type}`" v-for="(component, index) in $sectionData.components" v-if="$sectionData.components.length !== 0" :key="index">
              <component class="b-columns-component"
                 v-styler:for="{ el: $sectionData.components[index].element, path: `$sectionData.components[${index}].element`, type: $sectionData.components[index].type, label: $sectionData.components[index].label }"
                 :is="component.name"
                 :href="$sectionData.components[index].element.link.href"
                 :target="$sectionData.components[index].element.link.target"
                 :path="`components[${index}].element`"
                 :style="$sectionData.components[index].element.styles"
                 :class="[$sectionData.components[index].element.classes, $sectionData.components[index].class]"
              >
                <div v-html="$sectionData.components[index].element.text"></div>
              </component>
            </div>
          </draggable>
        </sandbox>
      </div>
      <div class="b-section-padd">
        <div class="b-section-padd-border">
          <div class="b-grid__row"
            :style="{ 'align-items' : $sectionData.mainStyle.styles['align-items']}"
            >
            <div class="b-grid__col-m-12"
              :class="`b-grid__col-${12/$sectionData.mainStyle.count}`"
              v-for="(column, key) in $sectionData"
              v-if="key.indexOf('components') !== -1 && key.split('components')[1] && parseFloat(key.split('components')[1]) <= $sectionData.mainStyle.count"
              :key="key"
              >
              <sandbox
                class="b-sandbox"
                :container-path="`$sectionData.container${key.split('components')[1]}`"
                :components-path="`$sectionData.components${key.split('components')[1]}`"
                >
                <draggable v-model="$sectionData[key]" class="b-draggable-slot" :style="$sectionData[`container${key.split('components')[1]}`].styles" @start="$_drag(`components${key.split('components')[1]}`)" @change="$_dragStop">
                  <div :class="`b-draggable-slot__${component.type}`"
                     v-for="(component, index) in $sectionData[key]"
                     v-if="$sectionData[key].length !== 0"
                     :key="index"
                    >
                    <component class="b-columns-component"
                      v-styler:for="{ el: $sectionData[`${key}`][index].element, path: `$sectionData.${key}[${index}].element`, type: $sectionData[key][index].type, label: $sectionData[`${key}`][index].label }"
                      :is="component.name"
                      :href="$sectionData[key][index].element.link.href"
                      :target="$sectionData[key][index].element.link.target"
                      :path="`${key}[${index}].element`"
                      :style="$sectionData[key][index].element.styles"
                      :class="[$sectionData[key][index].element.classes, $sectionData[key][index].class]"
                      >
                      <div v-html="$sectionData[key][index].element.text"></div>
                    </component>
                  </div>
                </draggable>
              </sandbox>
            </div><!--/.b-grid__col-3 b-grid__col-m-12-->
          </div><!--/.b-grid__row-->
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>
