<template>
    <div class="hand-track-box">
        <div class="box" ref="boxRef">
            <video style="width: 600px; height: 500px;"  ref="videoRef" autoplay muted @play="handlePlay"></video>
            <canvas ref="cn"></canvas>
            <img :src="LOGO_PATH" alt="" 
            v-if="handPosition"
            :style="{
                left: handPosition[0] - handPosition[2] / 3 + 'px',
                top: handPosition[1] + handPosition[3] / 2 + 'px',
            }">
        </div>
        <button class="btn" @click="handleClockIn">点我打卡</button>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
// import * as handTrack from 'handtrackjs';
import { downloadPicture } from '../../utils/html2png';

const videoRef = ref(null);
const cn = ref(null);
const LOGO_PATH = '/logo.png'
const boxRef = ref(null);
let handPosition = ref(null);
let model;
let ctx


const handleClockIn = async () => {
    await downloadPicture(boxRef.value)
}

navigator.mediaDevices.getUserMedia = 
    navigator.mediaDevices.getUserMedia ||
    navigator.getUserMedia ||
    navigator.mediaDevices.webkitGetUserMedia ||
    navigator.mediaDevices.mozGetUserMedia;


const handleDetection = () => {
    model.detect(videoRef.value).then(predictions => {
        console.log(predictions)
        ctx.clearRect(0, 0, cn.value.width, cn.value.height);
        let res = []
        // model.renderPredictions(predictions, cn.value, ctx, videoRef.value);

        predictions.forEach(item => {
            console.log(item.label)
            if (item.label != 'face') {
                res.push(item)
                
            }
        })
        // model.renderPredictions(res, cn.value, ctx, videoRef.value);
        if (res.length > 0) {
            handPosition.value = res[0].bbox;
        } else {
            handPosition.value = null;
        }

    })
    requestAnimationFrame(handleDetection);
}

const drawHandImage = (bbox, handImage) => {
  // 在手的位置绘制图片
  ctx.drawImage(handImage, bbox[0], bbox[1], bbox[2], bbox[3]);
  console.log(handImage)
};

const startVideo = () => {
    handTrack.startVideo(videoRef.value).then((status = {}) => {
        if (status.status) {
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then( stream => {
                videoRef.value.srcObject = stream;
                handleDetection()
            })
        }
    })
}

onMounted(async () => {
    console.log(handTrack)
    ctx = cn.value.getContext('2d');
    model = await handTrack.load();
    startVideo()
})

</script>


<style scoped lang="scss">
.hand-track-box {
    @include cover;
    display: flex;
    justify-content: center;
    align-self: center;
    position: relative;
    min-height: 100vh;
    background-image: url(https://www.gcsis.cn/img/live_bg.jpg);
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 9vh;
    .btn {
        position: absolute;
        background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
        color: white;
        border: none;
        padding: .1667rem .3333rem;
        border-radius: .1167rem;
        bottom: 20vh;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }
    .box {
        width: 600px;
        height: 500px;
        position: relative;
        // overflow: hidden;
        video {
            width: 100%;
            height: 100%;
        }
        canvas {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
        }
        img {
            position: absolute;
            z-index: 1000;
        }
    }
}

</style>