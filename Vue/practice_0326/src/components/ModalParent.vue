<template lang="">
    <div>
       <button class="btn" @click="showModal">모달 열기</button>
       <Modal :visible="isModalVisible" @close="hideModal">
            <h2>이 모달을 당장 닫지 않으면</h2>
            <p>시끄러울 겁니다</p>
            <img 
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMjFfOTkg%2FMDAxNzQwMTE5ODk1MDYz.H5_0OlNq3kUeO6Y8gMXSkRPQGfW1kHDlyaaT0SOjIHAg.Htnx404buUMkRHvA-6gLmmczz944wreWNexIE8wTEkQg.PNG%2FKakaoTalk_20250221_152804794_01.png&type=a340"
            alt="마멋"
            />
       </Modal>
    </div>
</template>

<script>
import Modal from './Modal.vue';


export default {
    name: 'ModalParent',
    components: { Modal },
    
    data() {
        return {
            isModalVisible: false,
        }
    },

    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        hideModal() {
            this.isModalVisible= false;
        },
    },
}
</script>

<style scoped>
    .btn {
        width: 100px;
        height: 50px;
    }
</style>