<template>
  <div class="contacts">
    <h1 class="contacts__title">Список контактов</h1>
    <div class="contacts__controls">
      <button class="contact__add-btn" @click="addNewItemContact">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="plus-square"
          class="svg-inline--fa fa-plus-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
          ></path></svg
        >Добавить
      </button>
    </div>
    <ul class="contacts__content">
      <Contact
        v-for="item of allContacts"
        :key="item.id"
        :itemContact="item"
        @removeItem="showPopupModal"
      />
    </ul>
    <Popup v-if="showPopup" @confirm="removeSelectItem" />
  </div>
</template>
<script>
import Contact from "@/components/Contact";
import Popup from "@/components/Popup";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      showPopup: false,
      selectRemoveContactId: null,
    };
  },
  components: { Contact, Popup },
  computed: mapGetters(["allContacts", "getLastId"]),
  methods: {
    // Добавление нового контакта
    ...mapActions(["addNewContact"]),
    addNewItemContact() {
      // Сформировали новый шаблонный объект
      const item = {
        id: this.getLastId,
        surname: "Surname",
        name: "Name",
        patronamic: "Patronamic",
        tel: "+7 8 764 989 438",
        email: "test@mail.ru",
      };
      // Добавление в store
      this.addNewContact(item);
    },

    //  Вывод модального окна
    showPopupModal(event) {
      this.showPopup = true;
      this.selectRemoveContactId = event;
    },

    // Удаление выбранного элемента
    ...mapActions(["removeItem"]),
    removeSelectItem(event) {
      this.showPopup = false;
      if (event) {
        // Если условие POPUP вернет true = удаляем, false = отмена
        this.removeItem(this.selectRemoveContactId);
      }
    },
  },
};
</script>
<style lang="scss">
.contacts {
  max-width: 800px;
  margin: 0 auto;
}
.contacts__title {
  color: grey;
}

.contacts__controls {
  padding: 8px;
}

.contact__add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  cursor: pointer;
  background: #8ac926;
  color: #fff;
  font-weight: 500;
  border: transparent;
  border-radius: 4px;
}
.contact__add-btn svg {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
</style>
