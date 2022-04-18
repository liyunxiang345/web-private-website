<template>
  <div class="home">
    <image-banner :list="bannerList">
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
        <article-card v-for="(article, index) in articleList" :key="index" :banner="article.url" :title="article.title" :date="article.date"></article-card>
    </section>
  </div>
</template>
<script>
import ImageBanner from "@/components/template/ImageBanner";
import ArticleCard from "@/components/template/ArticleCard";
import Api from "@/api/userApi";
export default {
  components: { 
    ImageBanner, 
    ArticleCard 
  },
  data(){
    return {
      bannerList:[
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-1.jpg"},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-2.jpg"},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-3.jpg"},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-4.jpg"}
      ],
      articleList: [
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-1.jpg", title: '云雾草堂（云翔blog）前端测试版本上线啦', date:1649314065815},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-2.jpg", title: '记录MongoDB的安装和启动',date: 1649314035815},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-3.jpg", title: '给服务器私有化部署jenkins成功' ,date: 1649314025815},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-4.jpg", title: '疫情期间，今天难得去春游' ,date: 1649314025815}
      ]
    }
  },
  methods:{
    goDown(){
      this.$refs["articles"].scrollIntoView({ behavior: "smooth"})
    },
    register() {
        console.log(process.env)
        Api.registerUser({
            username: 'yunxiang.Lee',
            password: 'admin'
        }).then(res => {
            console.log(res)
        })
    },
    getUserList() {
        Api.getUserList().then(res => {
            console.log(res);
        })
    },
    login() {
        Api.login({ 
            username: 'yunxiang.Lee',
            password: 'admin'
        }).then(res => {
            const { accessToken, username } = res.data;
            localStorage.setItem('access-token',accessToken);
            localStorage.setItem('USER',username);
        })
    }
  },
  mounted() {
    //   this.login();
      this.register();
      this.getUserList();
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
    width: 3.6rem;
    height: 4.65rem;
    padding: 0.7rem 0.2rem;
    box-sizing: border-box;
    margin: 3rem auto;
    background-color: #FFFFFF;
    text-align: center;
    .card{
      font-family: "Arial black", "宋体", "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 0.9rem;
      line-height: 1;
      font-weight: bold;
      text-align: left;
    //   margin-bottom: 0.4rem;
      color: #42AA60;
    }
    .arrow-down{
      color: #42AA60;
      font-size: 0.7rem;
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
     width: 8rem;
     margin: auto;
  }
}
@media screen and (max-width: 400px) {
    .home {
        .article-list{
            width: 85%;
            margin: auto;
        }
    }
}
</style>