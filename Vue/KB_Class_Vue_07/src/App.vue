<script setup>
  import Child1  from './components/Child1.vue';
  import Child2 from './components/Child2.vue';
  import Child3 from './components/Child3.vue';
  import NoSlotTest from './components/NoSlotTest.vue';
  import SlotTest from './components/SlotTest.vue';
</script>

<template>
  <div>
    <Child1 />
    <Child2 />
    <Child3 />

    <hr />

    <NoSlotTest />

    <hr />

    <SlotTest />
  </div>
</template>

<script>
  export default { 
    name: 'App',
};
</script>

<style scoped>

</style>
