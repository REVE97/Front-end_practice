<!-- Named slot 실습 카드 만들기 -->

<template lang="">
    <div>
        <FancyPhotoBox>
            <template v-slot:photoName> 
                <h2><FancyPhotoBox photoName="강아지" /></h2>
            </template>
            <template v-slot:photoImg>
                <FancyPhotoBox photoImg="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMjFfOTkg%2FMDAxNzQwMTE5ODk1MDYz.H5_0OlNq3kUeO6Y8gMXSkRPQGfW1kHDlyaaT0SOjIHAg.Htnx404buUMkRHvA-6gLmmczz944wreWNexIE8wTEkQg.PNG%2FKakaoTalk_20250221_152804794_01.png&type=a340" />
            </template>
        </FancyPhotoBox>
    </div>
</template>

<script>
import FancyPhotoBox from './FancyPhotoBox.vue';

export default {
    name: 'FancyPhotoParent',
    components: { FancyPhotoBox } // 자식 컴포넌트 추가 
}
</script>

<style scoped>
    
</style>