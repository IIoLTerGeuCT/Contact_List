<template>
  <li class="contact">
    <h3 class="contact__name">
      {{ itemContact.id }}
      {{ itemContact.surname }}
      {{ itemContact.name }}
      {{ itemContact.patronamic }}
    </h3>
    <div class="contact__content">
      <div id="contact__data" class="contact__data">
        <div class="contact__field">
          <div class="contact__key">tel:</div>
          <div class="contact__value">{{ itemContact.tel }}</div>
        </div>
        <div class="contact__field">
          <div class="contact__key">email:</div>
          <div class="contact__value">{{ itemContact.email }}</div>
        </div>
      </div>
      <div class="contact__controls">
        <router-link
          class="contact__btn contact__btn--details"
          :to="{ name: 'Details', params: { id: itemContact.id } }"
          tag="button"
        >
          Подробнее
        </router-link>
        <button
          class="contact__btn contact__btn--delete"
          @click="$emit('removeItem', itemContact.id)"
        >
          Удалить
        </button>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["itemContact"],
  methods: {},
};
</script>
<style lang="scss">
.contact {
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  list-style: none;
}
.contact:first-child {
  border-top: 1px solid #eee;
}
.contact__name {
  font-size: 18px;
  margin-bottom: 8px;
  color: #303030;
}

.contact__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.contact__data {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}

.contact__field {
  flex-shrink: 0;
  width: 50%;
  color: #2b2b2b;
}
.contact__field:not(:nth-last-child(-n + 2)) {
  margin-bottom: 8px;
}

.contact__key {
  font-size: 14px;
  font-weight: 500;
}

.contact__value {
  font-size: 13px;
}

.contact__controls {
  width: 160px;
  flex-shrink: 0;
}

.contact__btn {
  cursor: pointer;
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.contact__btn:not(:last-child) {
  margin-bottom: 8px;
}
.contact__btn--details {
  background: #1982c4;
}
.contact__btn--delete {
  background: #ff595e;
}
</style>
