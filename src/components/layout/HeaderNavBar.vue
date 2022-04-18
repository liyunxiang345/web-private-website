
<template>
  <div>
    <div class="header-wrap">
      <el-row class="first-row">
        <el-col class="col" :span="4"></el-col>
        <el-col class="col" :span="16">
          <!--title-->
          <div class="title">
            <div class="title-logo"></div>
            <div class="title-text">云雾草堂</div>
          </div>
          <!--button-->
          <div class="menu-btn" @click="changeMenu">
            <span class="line-icon"></span>
            <span class="line-icon"></span>
            <span class="line-icon"></span>
          </div>
        </el-col>
        <el-col class="col" :span="4"></el-col>
      </el-row>
    </div>
    <transition name="menu-fade">
      <nav class="my-nav" v-if="MENUSHOW">
        <el-row>
          <el-col class="nav-col" :span="4"></el-col>
          <el-col class="nav-col" :span="16">
            <section class="menu-nav">
              <div class="menu-item">首页</div>
              <div class="menu-item">照片墙</div>
              <div class="menu-item">杂文</div>
              <div class="menu-item">我的</div>
            </section>
          </el-col>
          <el-col class="nav-col" :span="4"></el-col>
        </el-row>
      </nav>
    </transition>
  </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters("MENU",{
      MENUSHOW: "getTipShow"
    })
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapActions("MENU",["setTipShow"]),
    changeMenu(){
      this.setTipShow(!this.MENUSHOW);
    }
  }
};
</script>
<style lang="less" scoped>
  .header-wrap{
    width: 100%;
    height: 0.6rem;
    background-color: #FFFFFF;
    position: relative;
    z-index: 100;
    .first-row{
      position: relative;
      z-index: 100;
    }
    .col{
      height: 0.6rem;
    }
    .title{
      float: left;
      cursor: pointer;
      font-weight: bold;
      font-size: 0.18rem;
      color: #42AA60;
      text-shadow:  #42AA60 0 0 0.2rem;
      height: 60 / 100rem;
      .title-logo{
        display: inline-block;
        background-image: url('~@/assets/public/grass.png');
        width: 0.4rem;
        height: 0.4rem;
        background-size: cover;
        float: left;
        margin-top: 0.1rem;
      }
      .title-text{
        float: left;
        padding-top: 0.2rem;
      }
    }
    .menu-btn{
      display: block;
      position: relative;
      float: right;
      margin-top: 0.2rem;
      background-color: transparent;
      background-image: none;
      cursor: pointer;
      .line-icon{
        width: 0.28rem;
        height: 0.03rem;
        background: #42AA60;
        display: block;
        border-radius: 0.01rem;
        margin-bottom: 0.05rem;
      }
    }

  }
  .my-nav{
    height: 0.5rem;
    background-color: #FFFFFF;
    position: absolute;
    width: 100%;
    z-index: 100;
    .nav-col{
      height: 0.5rem;
      .menu-nav{
        float: right;
        font-size: 0.16rem;
        .menu-item{
          display: inline-block;
          color: #42AA60;
          padding: 0.15rem;
          cursor: pointer;
          &:hover{
            color: #f28241
          }
        }
      }
    }
  }
  .menu-fade-enter-active{
    transition: all .5s ease;
  }

  .menu-fade-leave-active{
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .menu-fade-enter, .menu-fade-leave-to{
    transform: translateY(-50 / 100rem);
  }
</style>


