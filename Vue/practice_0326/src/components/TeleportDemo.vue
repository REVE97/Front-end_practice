<template lang="">
    <button @click="teleportTo('orange')">오렌지로</button>
    <button @click="teleportTo('skyblue')">하늘색으로</button>
    <button @click="teleportTo('red')">빨강으로</button>
    <div id="orange">오렌지 영역</div>
    <div id="skyblue">하늘색 영역</div>
    <div id="red">빨강색 영역</div>

    <teleport :to="teleportTarget">
        <h1>나는 어디로 가는가</h1>
    </teleport>

</template>
<script>
export default {
    name:'TeleportDemo',
    data() {
        return {
            teleportTarget: 'body',
        }
    },
    methods: {
        teleportTo(zone) {
            this.teleportTarget = `#${zone}`;
        },
    },
}
</script>

<style scoped>
   #orange {
    background-color: orange;
    width: 500px;
    height: 100px;
   }
   #skyblue {
    background-color: skyblue;
    width: 500px;
    height: 100px;
   }
   #red {
    background-color: red;
    width: 500px;
    height: 100px;
   }
</style>
