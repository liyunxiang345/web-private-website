<template>
  <div class="home">
    <image-banner :list="banner_list">
      <template v-slot:center>
        <div class="center-card">
          <p class="card">
            HELLO
            <br>
            MY
            <br>
            BRO.
          </p>
          <i class="el-icon-arrow-down arrow-down" @click="goDown"></i>
        </div>
      </template>
    </image-banner>
    <section ref="articles" class="article-list">
      111
    </section>
  </div>
</template>
<script>
import ImageBanner from "@/components/template/ImageBanner";
export default {
  components: {ImageBanner},
  data(){
    return {
      banner_list:[
        {url: require("@/assets/banner/banner-1.jpg")},
        {url: require("@/assets/banner/banner-2.jpg")},
        {url: require("@/assets/banner/banner-3.jpg")},
        {url: require("@/assets/banner/banner-4.jpg")}
      ]
    }
  },
  methods:{
    goDown(){
      this.$refs["articles"].scrollIntoView({ behavior: "smooth"})
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.home{
  overflow: auto;
  .center-card{
    width: 360px;
    height: 465px;
    padding: 70px 20px;
    box-sizing: border-box;
    margin: 300px auto;
    background-color: #FFFFFF;
    text-align: center;
    .card{
      font-family: "Arial black", "宋体", "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 90px;
      line-height: 1;
      font-weight: bold;
      text-align: left;
      margin-bottom: 40px;
      color: #42AA60;
    }
    .arrow-down{
      color: #42AA60;
      font-size: 70px;
      font-weight: bold;
      cursor: pointer;
    }
    &:hover{
      .arrow-down{
        animation: rotate .5s linear;
      }
        
    }
  }
  .article-list{
    min-height: 2000px
  }
}
</style>