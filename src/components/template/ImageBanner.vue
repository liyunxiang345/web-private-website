<template>
  <section class="image-banner">
    <div class="img" :class="index === $index ? 'img-transition' : ''" v-for="(item,$index) in list" v-show="index === $index" :key="item.url" :style="{backgroundImage: `url(${item.url})`}">
      <slot name="center"></slot>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      timer: null,
      index: 0
    }
  },
  methods:{
    timeGo(){
      if(this.index >= this.list.length - 1){
        this.index = 0;
      }else{
        this.index += 1;
      }
      this.timer = setTimeout(() => {
        window.requestAnimationFrame(this.timeGo);
        clearTimeout(this.timer);
      },12000)
    }
  },
  mounted(){
    this.timeGo();
  }
  // updated(){
  //   clearInterval(this.timer);
  //   this.timeGo();
  // },
  // destroyed(){
  //   clearInterval(this.timer);
  // }
}
</script>
<style lang="less" scoped>
@keyframes fadeIn {
	0% {
	opacity: 0; /*初始状态 透明度为0*/
  }
  1% {
    opacity: .1s;
  }
  2% {
    opacity: .3s
  }
  5% {
    opacity: .5s;
  }
  10% {
    opacity: .9;
  }
  15% {
    opacity: 1;
  }
	100% {
		opacity: 1; /*结尾状态 透明度为1*/
	}
}
.image-banner{
  width: 1440px;
  height: 1066px;
  .img{
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    opacity: 0;
  }
  .img-transition{
    animation-name: fadeIn;
    animation-duration: 12s;
    animation-iteration-count: 1;
  }
}
</style>