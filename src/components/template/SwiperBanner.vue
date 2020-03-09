<template>
  <div class="swiper-wrap">
    <div class="swiper-content" :style="{width: `${550 * dataList.length}px`}">
      <div class="swiper-banner" v-for="(banner,$index) in dataList" :key="$index">{{banner}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [1, 2, 3, 4, 1], //图片数组
      currentIndex: 0, //当前索引
      nextIndex: 1, //下一索引
      preIndex: 3, //上一索引
      timer: null,
      animate: false,
      speed: 0
    };
  },
  methods: {
    swiperAnimation() {
      const $swiper = document.querySelector(".swiper-content");
      this.timer = setInterval(() => {
        if (this.currentIndex <= 4) {
          this.currentIndex++;
          $swiper.style.transition = "transform 1s";
          this.speed = this.speed - 550;
          $swiper.style.transform = `translate(${this.speed}px)`;
        }
      }, 5000);
    }
  },
  mounted() {
    this.swiperAnimation();
  },
  watch: {
    currentIndex(val) {
      const $swiper = document.querySelector(".swiper-content");
      if (val > 4) {
        console.log("准备");
        clearInterval(this.timer);
        console.log("立即停止");
        $swiper.style.transition = "transform 0s";
        $swiper.style.transform = "translate(0px)";
        this.currentIndex = 0;
        this.speed = 0;
        this.swiperAnimation();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-wrap {
  width: 550px;
  height: 300px;
  border: 1px dashed black;
  overflow: hidden;
  .swiper-content {
    height: 300px;
    .swiper-banner {
      width: 550px;
      height: 300px;
      display: inline-block;
      text-align: center;
      line-height: 300px;
      font-size: 20px;
    }
  }
}
</style>