<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="container__header">
        <h1 class="header__title">Детальная информация</h1>
      </div>
      <div class="container__main">
        <div class="container__input">
          <input type="text" value="value" />
          <button @click="getItem">Получить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      idItem: null,
    };
  },

  methods: {
    ...mapGetters(["getCurrentItem"]),
    getItem() {
      console.log(this.getCurrentItem());
      // const item = this.getCurrentItem(1);
      // console.log(item);
    },
  },
};
</script>
