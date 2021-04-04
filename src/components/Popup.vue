<template>
  <div class="model">
    <div class="model__wrapper">
      <div class="model__container">
        <div class="container__title">
          <h3 class="title">Вы действительно хотите удалить контакт?</h3>
        </div>
        <div class="container__controls">
          <div class="container__btn-confirm">
            <button class="btn-confirm btn" @click="$emit('confirm', true)">
              Ок
            </button>
          </div>
          <div class="container__btn-cancel">
            <button class="btn-cancel btn" @click="$emit('confirm', false)">
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.model {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.model__wrapper {
  display: table-cell;
  vertical-align: middle;
}
.model__container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.title {
  margin-top: 0;
  color: #42b983;
}
.container__controls {
  display: flex;
  justify-content: space-around;
  padding-top: 8px;
}
.btn {
  padding: 2px 10px;
  width: 100%;
  height: 32px;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  border: transparent;
  border-radius: 4px;
}
.btn-confirm {
  width: 100px;
  background-color: #8ac926;
  color: #fff;
  font-weight: 500;
}
.btn-cancel {
  width: 100px;
  color: #fff;
  background-color: #ff595e;
  font-weight: 500;
}
</style>
