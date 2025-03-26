<template lang="">
    <div>
        <SlotChild>
            <h1>슬롯 테스트!</h1>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMjFfOTkg%2FMDAxNzQwMTE5ODk1MDYz.H5_0OlNq3kUeO6Y8gMXSkRPQGfW1kHDlyaaT0SOjIHAg.Htnx404buUMkRHvA-6gLmmczz944wreWNexIE8wTEkQg.PNG%2FKakaoTalk_20250221_152804794_01.png&type=a340" alt="강아지" />
            <input type="text" />
            <button>버튼1</button>
            <button>버튼2</button>
        </SlotChild>
    </div>
</template>

<script>
import SlotChild from './SlotChild.vue';

export default {
    name: 'SlotParent',
    components: { SlotChild }
}
</script>

<style lang="">
    
</style>