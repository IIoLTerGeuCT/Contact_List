export default {
  state: {
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
        name: "Владимир",
        patronamic: "Петрович",
        email: "wwwww.@mail.ru",
        tel: "+75478439032",
      },
      {
        id: "3",
        surname: "Сидоров",
        name: "Максим",
        patronamic: "Яковлевич",
        email: "wwwww.@mail.ru",
        tel: "+71236457123",
      },
      {
        id: "4",
        surname: "Кошкин",
        name: "Николай",
        patronamic: "Николаевич",
        email: "wwwww.@mail.ru",
        tel: "+71236457123",
      },
    ],
  },
  actions: {
    addNewContact(store, item) {
      store.commit("addItem", item);
    },
    removeItem(store, id) {
      store.commit("removeItem", id);
    },
  },
  mutations: {
    addItem(state, item) {
      state.contacts.push(item);
    },
    removeItem(state, id) {
      state.contacts = state.contacts.filter((item) => item.id !== id);
    },
  },

  getters: {
    allContacts(state) {
      return state.contacts;
    },
    getCurrentItem(state, id) {
      console.log(id);
      const obj = state.contacts.map((item) => item.id === id);
      return obj;
    },
    // TODO Сделать получение Id для нового элемента
    getLastId(state) {
      return +state.contacts[state.contacts.length - 1].id + 1;
    },
  },
};