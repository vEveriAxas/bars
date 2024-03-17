<template>
    <div class="main-container">
        <div class="widget">
            <div class="message-container">
                <div class="message-wrapper">
                    <div 
                    class="message" 
                    v-for="message in messages" 
                    :key="message?.id"
                    >
                        {{ message?.content }}
                    </div>
                </div>
            </div>

            <div class="actions">
                <input 
                class="message-input" 
                id="message-input" 
                type="text"
                v-model="content"
                />
                
                <button 
                class="send-btn"
                @click="sendMessage"
                >
                    Отправить
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import socket from './api/ws';
import { ref, onMounted } from 'vue';

const content = ref('');
const messages = ref([]);

function sendMessage() {
    socket.emit('message', content.value);
    content.value = '';
}

onMounted(() => {
    socket.on('message', (content) => {
        messages.value.push({
            id: Date.now(),
            content,
        });
    });
});

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.main-container {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(52, 52, 52);
}
.message-container {
    width: 100%;
    height: 90%;
    border-bottom: 1px solid rgb(91, 91, 91);
    overflow: auto;
}
.message-wrapper {
    width: 100%;
    height: max-content;
    min-height: 100%;
}
.message {
    width: max-content;
    border-radius: 5px;
    padding: 5px 15px;
    color: white;
    font-size: 18px;
    background-color: gray;
    margin: 5px 5px 5px auto;
}
.widget {
    position: absolute;
    top: 5%;
    bottom: 15%;
    right: 5%;
    left: 5%;
    margin: auto;
    border: 2px dashed gray;
}
.actions {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10%;
}
.message-input {
    position: relative;
    width: 80%;
    height: 90%;
    background-color: rgba(0,0,0,0);
    border: 1px solid gray;
    color: white;
}
.send-btn {
    height: 90%;
    background-color: rgba(0,0,0,0);
    border: 1px solid gray;
    padding: 5px 15px;
    border-radius: 5px;
    color: gray;
    font-size: 15px;
}

</style>
