<template>
<div id="form">
  <div>
    квіти в дарунок - це те, що змушує нашу душу цвісти
  </div>
  <div id="form_header">
    ОФОРМІТЬ ВАШЕ ЗАМОВЛЕННЯ ВЖЕ СЬОГОДНІ
  </div>

  <div class="row_with_inputs">
    <input type="text" name="name" placeholder="Ім'я" />
    <input type="text" name="type_of_shopping" placeholder="Вид покупки" />
  </div>

  <div class="row_with_inputs">
    <input type="text" name="telephone" placeholder="Тел" />
    <input type="text" name="email" placeholder="E-mail" />
  </div>

  <div id="large_input">
    <textarea placeholder="Ваше повідомлення" />
  </div>

  <div id="bottom_text">
    Залиште своє повідомлення і менеджер La Roserie зв’яжеться з Вами, щоб уточнити наявність квітів, кінцеву вартість замовленя та інші деталі
  </div>

  <div id="button_send">
    Надіслати
  </div>

  <div id="commenting_div">
    <div>
      <icon name='commenting'></icon>
    </div>
    <div>
      Не можете визначитись із вибором?<br> Ми з радістю Вас <b>проконсультуємо!</b>
    </div>
  </div>

</div>
</template>

<script>
import 'vue-awesome/icons/commenting';
import Icon from 'vue-awesome/components/Icon.vue';

export default {

  data() {
    return {};
  },
  mounted() {},
  components: {
    Icon
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/form.scss';
</style>
