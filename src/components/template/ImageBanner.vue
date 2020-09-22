<template>
  <section class="image-banner">
    <transition-group name="slide-fade">
      <div class="img" v-for="(item,$index) in list" v-show="index === $index" :key="item.url" :style="{backgroundImage: `url(${item.url})`}">
        <slot name="center"></slot>
      </div>
    </transition-group>
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
      setTimeout(() => {
        window.requestAnimationFrame(this.timeGo);
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
.image-banner{
  width: 1440px;
  height: 1066px;
  .img{
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
  }
}
.slide-fade-enter-active {
  transition: all 1.4s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>