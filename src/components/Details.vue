<template>
  <div class="details">
    <div class="details__wrapper">
      <div class="details__header">
        <h1 class="details__title">Детальная информация</h1>
        <div class="details__controls">
          <button class="details__add-btn" @click="visibleAddForm = true">
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
      </div>
      <div class="details__addNewProps" v-if="visibleAddForm">
        <div class="addNewProps__input">
          <input
            type="text"
            class="addNewProps__key"
            placeholder="ключ"
            v-model="newKey"
          />
          <input
            type="text"
            class="addNewProps__value"
            placeholder="значение"
            v-model="newValue"
          />
        </div>
        <div class="addNewProps__controls">
          <button class="addNewProps__ок">Сохранить</button>
          <button class="addNewProps__cancel" @click="visibleAddForm = false">
            Отменить
          </button>
        </div>
      </div>
      <div class="details__contact">
        <div
          class="details__field"
          v-for="[key, value] in arrayPaire"
          :key="key"
        >
          <input type="text" class="details__key" :value="key" />
          <input type="text" class="details__value" :value="value" />
          <button class="details__remove-key" @click="showPopupModal(key)">
            Удалить
          </button>
        </div>
      </div>
    </div>
    <Popup v-if="showPopup" @confirm="removeSelectItem" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedContactId: null, // Выбранный контакт ID
      contact: null, // Объект контакт
      arrayPaire: null,
      visibleAddForm: false, //Состояние формы добавления новой пары ключ/значение
      newKey: "",
      newValue: "",
      showPopup: false,
      selectRemoveKey: null,
    };
  },
  computed: {
    ...mapGetters(["allContacts"]),
  },
  created() {
    try {
      this.getData(); // Загрузка данных в компонент
    } catch (ex) {
      console.log(ex);
    }
  },
  methods: {
    getData() {
      // // Получим параметр из маршрута
      this.selectedContactId = this.$route.params.id;
      // Найдем необходимый контакт
      this.contact = this.allContacts.find(
        (item) => item.id === this.selectedContactId
      );
      // Получим массив ключ/значение
      this.arrayPaire = Object.entries(this.contact);
    },
    showPopupModal(key) {
      this.showPopup = true;
      this.selectRemoveKey = key;
    },
    removePaire(state) {
      this.showPopup = false;
      if (state) {
        this.$delete(this.contact, this.selectRemoveKey);
        this.arrayPaire = Object.entries(this.contact);
      }
      console.log(this.arrayPaire);
    },
  },
};
</script>
<style lang="scss">
.details {
  max-width: 800px;
  margin: 0 auto;
}
.details__title {
  color: grey;
  padding: 8px;
}

.details__controls {
  padding: 8px;
}

.details__add-btn {
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
.details__add-btn svg {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.addNewProps__input {
  display: flex;
  justify-content: center;
  input {
    width: 30%;
    height: 28px;
  }
  :not(:last-child) {
    margin-right: 10px;
  }
}

.addNewProps__controls {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  button {
    width: 160px;
    height: 28px;
    color: #fff;
    border-radius: 4px;
    border-color: transparent;
    font-size: 14px;
    font-weight: 500;
  }
  :first-child {
    margin-right: 10px;
    background-color: #8ac926;
  }
  :last-child {
    background-color: #ff595e;
  }
}
.details__field {
}
.details__key,
.details__value {
  width: 200px;
  height: 28px;
}
.details__keys {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.details__values {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.details__field {
  justify-content: space-around;
}
.details__contact {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.details__remove-key {
  height: 28px;
  width: 100px;
  color: #fff;
  background-color: #ff595e;
  border: none;
  border: transparent;
  border-radius: 4px;
  cursor: pointer;
}
input {
  margin-top: 5px;
  margin-right: 5px;
}
</style>
