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
          <button class="addNewProps__ок" @click="saveNewPaire">
            Добавить
          </button>
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
          <input type="text" :id="key" class="details__key" :value="key" />
          <input
            type="text"
            :id="key + '_value'"
            class="details__value"
            :value="value"
            :v-model="key"
          />

          <button class="details__remove-key" @click="showPopupModal(key)">
            Удалить
          </button>
        </div>
      </div>
      <div class="details__controls-btn">
        <button class="details__save" @click="saveUpdateContact">
          Сохранить
        </button>
        <button class="details__restore" @click="test1">Отменить</button>
      </div>
    </div>
    <Popup v-if="showPopup" :title="popupTitle" @confirm="removePaire" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Popup from "@/components/Popup";
export default {
  data() {
    return {
      selectedContactId: null, // Выбранный контакт ID
      mainContact: null, // Основной объект контакт
      copyContact: null, // Копия основного контакта для сохранения нескольких состояний
      arrayPaire: null, // Массив ключ/значения
      visibleAddForm: false, //Состояние формы добавления новой пары ключ/значение
      newKey: "", // Поля для новых значений
      newValue: "", //
      showPopup: false, // состояние POPUP
      selectRemoveKey: null, // Выбранный элемент для удаления
      popupTitle: "", // Заголовок сообщения в POPUP окне
      statePOPUP: null, // Состояние результат
    };
  },
  computed: {
    ...mapGetters(["allContacts"]),
  },
  components: { Popup },
  mounted() {
    this.getData(); // Загрузка данных в компонент
    this.getPaire(); // Получение массив ключ/значение
  },
  methods: {
    getData() {
      // Получим параметр из маршрута
      this.selectedContactId = this.$route.params.id;
      // Найдем необходимый контакт
      this.mainContact = this.allContacts.find(
        (item) => item.id === this.selectedContactId
      );
      console.log(this.mainContact);
      // Создадим копию контакта, и дальше работаем с копией
      this.copyContact = Object.assign(this.mainContact);
    },
    getPaire() {
      if (this.copyContact) {
        // Получим массив ключ/значение
        this.arrayPaire = Object.entries(this.copyContact);
      }
    },
    saveNewPaire() {
      // Добавление новой пары
      this.copyContact[`${this.newKey}`] = this.newValue;
      this.getPaire();

      // Очистка полей ввода
      this.newKey = "";
      this.newValue = "";
    },
    showPopupModal(key) {
      this.popupTitle =
        "Вы действительно хотите удалить эту пару (ключ/значение)?";
      // Показать модальное окно
      this.showPopup = true;
      // Сохраним ключ по которому было вызванно событие
      this.selectRemoveKey = key;
    },
    removePaire(state) {
      this.showPopup = false;
      if (state) {
        this.$delete(this.copyContact, this.selectRemoveKey);
        this.getPaire();
      }
    },
    test1() {
      console.log(`test1`);
    },
    test2() {
      console.log(`test 2`);
    },
    saveUpdateContact() {
      this.popupTitle = "Сохранить изменения в контакте?";
      // Показать модальное окно
      this.showPopup = true;
      // // Получим все инпуты
      // const inputs = document.querySelectorAll("input");
      // // Массивы ключ/значение, что бы руками не прописывать все id input
      // // Так как точно не знаем сколько будет input,
      // const arrayKeys = [];
      // const arrayValues = [];
      // // Разделим данные по массивам
      // for (let i = 0; i < inputs.length; i++) {
      //   if (i % 2 === 0) {
      //     arrayKeys.push(inputs[i].value);
      //   } else {
      //     arrayValues.push(inputs[i].value);
      //   }
      // }
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
  background: #8ac926;
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

  :first-child {
    margin-right: 10px;
    background-color: #8ac926;
  }
  :last-child {
    background-color: #ff595e;
  }
}
.details__btn-controls {
  display: flex;
}
.details__key,
.details__value {
  width: 200px;
  height: 28px;
}

.details__contact {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  height: 28px;
  color: #fff;
  border: transparent;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  font-size: 14px;
  font-weight: 500;
}
.details__save {
  background-color: #8ac926;
  margin-right: 10px;
}
.details__restore {
  background-color: #1982c4;
}
.details__remove-key {
  background-color: #ff595e;
}
input {
  margin-top: 5px;
  margin-right: 5px;
}
.details__controls-btn {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
