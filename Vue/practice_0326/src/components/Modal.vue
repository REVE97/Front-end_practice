<template lang="">
    <div class="modal-overlay" v-if="visible">
      <div class="modal">
        <button class="clost-button" @click="sendClose"></button>
        <div class="modal-content">
            <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'Modal',
      props: {
        visible: {
            type: Boolean,
            required: true,
        },
      },
      methods: {
        sendClose() {
            this.$emit('close');
        },
      },
  }
  </script>
  
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

.modal-content {
  margin-top: 40px;
}
</style>