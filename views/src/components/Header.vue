<template>
<div id='header'>

  <div id='menu'>
    <!-- Logo -->
    <div id='logo'>

    </div>

    <!-- Menu's block -->
    <div id='menu_center'>

      <div @click="goTo('/')" :style='{ height: menuHeight + "px"}'>
        <div class="menu_el">
          ГОЛОВНА
        </div>
      </div>

      <div @click="goTo('/services')" :style='{ height: menuHeight + "px"}'>
        <div class="menu_el">
          НАШІ ПОСЛУГИ
        </div>
        <div class="menu_block" :style='{ top: menuHeight + "px"}'>
          <div>
            Букети
          </div>
          <div>
            Композиції
          </div>
          <div>
            Весільна флористика
          </div>
        </div>
      </div>

      <div @click="goTo('/catalog')" :style='{ height: menuHeight + "px"}'>
        <div class="menu_el">
          КАТАЛОГ КВІТІВ
        </div>
        <div class="menu_block" :style='{ top: menuHeight + "px"}'>
          <div>
            Троянди
          </div>
          <div>
            Альстромерії
          </div>
          <div>
            Маргаритки
          </div>
          <div>
            Тюльпани
          </div>

        </div>
      </div>

      <div @click="goTo('/payments')" :style='{ height: menuHeight + "px"}'>
        <div class="menu_el">
          ОПЛАТА І ДОСТАВКА
        </div>
      </div>

      <div @click="goTo('/about')" :style='{ height: menuHeight + "px"}'>
        <div class="menu_el">
          ПРО НАС
        </div>
        <div class="menu_block" :style='{ top: menuHeight + "px"}'>
          <div @click="goTo('/about')">
            Відгуки клієнтів
          </div>
          <div @click="goTo('/about')">
            Запитайте у флориста
          </div>
        </div>
      </div>

    </div>

    <!-- Buket's block -->
    <div id='buket_block'>
      <icon id="shopping-cart" name='shopping-cart'></icon>
    </div>
  </div>
</div>
</template>


<script>
import 'vue-awesome/icons/shopping-cart';
import Icon from 'vue-awesome/components/Icon.vue';

export default {
  watch: { // to look if we switch from component to another one
    '$route' (to, from) {
      //console.log(to, from);
    }
  },
  data() {
    return {
      menuHeight: 0,
      menuBlockHeight: 0
    };
  },
  mounted() {
    this.menuHeight = document.getElementById('menu').offsetHeight;
    for (let child of document.getElementById('menu_center').children) {
      if (child.children.length > 1) {
        child.children[1].style.setProperty('width', child.children[1].offsetWidth + 16 + 'px');
      }
    }
  },
  methods: {
    goTo(to) {
      this.$router.push(to); // switch between components
    }

  },
  components: {
    Icon
  }
}
</script>
<style lang='scss' scoped>
// TODO: font-style

$purple: #352541;
$light_purple: #907aa0;
$white: #ffffff;
// Header
@media screen and (min-width: 992px) {

    #header {
        position: fixed;
        z-index: 1000;
        width: 100%;
        background-color: $purple;
        margin: 0;
        color: $white;
    }

    // Logo
    #logo {
        flex-grow: 3;
    }

    // Main menu
    #buket_block,
    #menu,
    #menu_center {
        display: flex;
        align-items: center;
    }
    #menu {}

    // Menu Center
    #menu_center {
        flex-grow: 5;
        display: flex;
        align-items: center;
        > div {
            flex-grow: 1;
            display: flex;
            align-items: center;
            &:hover {
                color: $light_purple;
                .menu_block {
                    visibility: visible;
                    color: $white;
                }
            }
        }
    }
    // Buket's block
    #buket_block {
        justify-content: flex-end;
        flex-grow: 2;
    }
    #shopping-cart {
        border: 1px solid $white;
        border-radius: 25%;
        margin: 10px 15px 10px 10px;
        padding: 5px;
    }

    // SubMenu
    .menu_block {
        //display: none;
        visibility: hidden;
        position: absolute;
        div {
            background-color: $light_purple;
            border-bottom: 1px solid $white;
            padding: 10px 15px;

            &:hover {

                animation-name: submenu;
                animation-duration: 0.25s;
                animation-fill-mode: forwards;
                animation-timing-function: ease-in-out;
                animation-iteration-count: 1;
            }
        }

        :last-child {
            border-bottom: 0;
        }
    }

    @keyframes submenu {
        100% {
            padding-left: 30px;
        }
    }
}
</style>
