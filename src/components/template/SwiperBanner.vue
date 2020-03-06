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
      timer1: null,
      timer2: null,
      animate: false,
      speed: 0
    };
  },
  methods: {
    swiperAnimation() {
      this.timer1 = setInterval(() => {
        let $swiper = document.querySelector(".swiper-content");
        if (this.currentIndex >= 4) {
          this.currentIndex = 0;
          this.speed = 0;
          $swiper.style.transition = "transform 0s";
          $swiper.style.transform = "translate(0px)";
          return;
        }
        this.currentIndex++;
        this.speed = this.speed - 550;
        $swiper.style.transition = "transform 1s";
        $swiper.style.transform = `translate(${this.speed}px)`;
      }, 3000);
    }
  },
  mounted() {
    this.swiperAnimation();
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