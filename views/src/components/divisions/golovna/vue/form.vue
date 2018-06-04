<template>
<div>
  <div class="form_polygon"></div>
  <div id="form">
    <div class="section_topic section_topic-white">
      <div class="section_topic__small_text">
        квіти в дарунок - це те, що змушує нашу душу цвісти
      </div>
      <div class="section_topic__main_text">
        ОФОРМІТЬ ВАШЕ ЗАМОВЛЕННЯ ВЖЕ СЬОГОДНІ
      </div>
    </div>

    <div class="basic_form">
      <div class="basic_form__row_inputs">
        <input type="text" name="name" placeholder="Ім'я" />
        <input type="text" name="type_of_shopping" placeholder="Вид покупки" />
      </div>

      <div class="basic_form__row_inputs">
        <input type="text" name="telephone" placeholder="Тел" />
        <input type="text" name="email" placeholder="E-mail" />
      </div>

      <div class="basic_form__large_textarea">
        <textarea placeholder="Ваше повідомлення" />
      </div>

      <div class="basic_form__bottom_text">
        Залиште своє повідомлення і менеджер Fresh Flowers зв’яжеться з Вами, щоб уточнити наявність квітів, кінцеву вартість замовленя та інші деталі
      </div>

      <div class="basic_form__button_send">
        Надіслати
      </div>

      <div class="basic_form__commenting_div">
        <div>
          <icon name='commenting'></icon>
        </div>
        <div>
          Не можете визначитись із вибором?<br> Ми з радістю Вас <b>проконсультуємо!</b>
        </div>
      </div>

    </div>

  </div>
  <div class="form_polygon1"></div>

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
