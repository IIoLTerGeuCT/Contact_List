<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="container__header">
        <h1 class="header__title">Детальная информация</h1>
      </div>
      <div class="container__main">
        
        <div class="container__keys" v-for="item in keys" :key="item">
          <input type="text" placeholder="Ключи" :value="item" />
        </div>
        <div class="container__values" v-for="item in values" :key="item">
          <input type="text" placeholder="Значения" :value="item"/> 
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
      url: window.location.href,
      selectedContactId: null,
      contact: null,
      keys: null,
      values: null,
    };
  },
  computed: {
    ...mapGetters(["allContacts"]),
  },
  created() {
    this.getData();
    this.getKeys();
    this.getValues();
  },
  methods: {
    getData() {
      // // Получим параметр из маршрута
      this.selectedContactId = this.$route.params.id;
      // Найдем необходимый контакт
      this.contact = this.allContacts.find(
        (item) => item.id === this.selectedContactId
      );

      console.log(this.contact);
    },
    getKeys() {
      this.keys = Object.keys(this.contact);
    },
    getValues() {
      this.values = Object.values(this.contact);
    },
  },
};
</script>
<style lang="scss">
.container__main {
  display: flex;
}

</style>
