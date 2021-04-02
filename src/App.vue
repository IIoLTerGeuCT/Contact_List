<template>
  <div id="app">
    <Contacts :contacts="contacts" />
    <router-view> </router-view>
  </div>
</template>
<script>
import Contacts from "./components/Contacts.vue";
export default {
  components: { Contacts },
  data() {
    return {
      contacts: [
        {
          id: "0",
          surname: "Петров",
          name: "Петр",
          patronamic: "Иванович",
          email: "wwwww.@mail.ru",
          tel: "+74957556983",
        },
        {
          id: "1",
          surname: "Иванов",
          name: "Петр",
          patronamic: "Иванович",
          email: "wwwww.@mail.ru",
          tel: "+78767657623",
        },
        {
          id: "2",
          surname: "Смирнов",
          name: "Петр",
          patronamic: "Иванович",
          email: "wwwww.@mail.ru",
          tel: "+75478439032",
        },
        {
          id: "3",
          surname: "Сидоров",
          name: "Петр",
          patronamic: "Иванович",
          email: "wwwww.@mail.ru",
          tel: "+71236457123",
        },
        {
          id: "4",
          surname: "Сидоров",
          name: "Петр",
          patronamic: "Иванович",
          email: "wwwww.@mail.ru",
          tel: "+71236457123",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
