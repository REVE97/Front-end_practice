<template>
    <div>
        <h1>오늘의 기분은!? {{ msg }}</h1> 
        <img :src="imgSrc" alt="msg" />
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'; 
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const mood = computed(() => currentRoute.params.mood);

const msg = computed(() =>
    mood.value === 'happy' ? '행복합니다' : '씐납니다' 
);
const imgSrc = computed(() => 
    mood.value === 'happy'
    ?
'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMDFfNDEg%2FMDAxNjk4ODMwMDQ2OTUz.L-ZjquFywRLZ37ulrTfDVf9kTMb7RKRnTdSR0SmtuTAg.LGWfBPaJnWKURHYOr5wnxgBNxanSlLtMKuq7fPFIP0sg.JPEG.duswlft%2F213A6733-1.jpg&type=a340'
    : 'https://i.imgur.com/wOCGlbN.gif' 
);
</script>

<style lang="scss" scoped>

</style>