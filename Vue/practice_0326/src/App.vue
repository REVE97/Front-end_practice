<script setup>
import SlotParent from './components/SlotParent.vue';
import NamedSlotParent from './components/NamedSlotParent.vue';
import FancyPhotoBoxParent from './components/FancyPhotoBoxParent.vue';
import ScoptedSlotParent from './components/ScoptedSlotParent.vue';
import ModalParent from './components/ModalParent.vue';
import TeleportDemo from './components/TeleportDemo.vue';
</script>

<template>
  <SlotParent />

  <hr />

  <NamedSlotParent />

  <hr />

  <FancyPhotoBoxParent />

  <hr />

  <ScoptedSlotParent />

  <hr />

  <ModalParent />

  <hr />

  <TeleportDemo />
</template>

<style scoped>

</style>
