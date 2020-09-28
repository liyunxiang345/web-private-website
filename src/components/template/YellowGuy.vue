<template>
  <div class="wrapper"><!-- 容器 -->
      <div class="line">
        <div class="dot" v-for="(item,index) in 99" :key="index"></div>
      </div>
      <div class="littleH"><!-- 小黄人 -->
          <div class="bodyH"><!-- 身体 -->
              <div class="trousers"><!-- 裤子 -->
                  <div class="condoleBelt"><!-- 吊带 -->
                      <div class="left"></div>
                      <div class="right"></div>
                  </div>
                  <div class="trousers_top"></div><!-- 裤子突出的矩形部分 -->
                  <div class="pocket"></div><!-- 裤袋 -->
                  <!-- 三条线 -->
                  <span class="line_left"></span>
                  <span class="line_right"></span>
                  <span class="line_bottom"></span>
              </div>
          </div>
          <div class="hair"><!-- 头发 -->
              <span class="left_hair_one"></span>
              <span class="left_hair_two"></span>
          </div>
          <div class="eyes"><!-- 眼睛 -->
              <div class="leftEye"><!-- 左眼 -->
                  <div class="left_blackEye">
                      <div class="left_white"></div>
                  </div>
              </div>
              <div class="rightEye"><!-- 右眼 -->
                  <div class="right_blackEye">
                      <div class="right_white"></div>
                  </div>
              </div>
          </div>
          <div class="mouse"><!-- 嘴巴 -->
              <div class="mouse_shape"></div>
          </div>
          <div class="hands"><!-- 双手 -->
              <div class="leftHand"></div>
              <div class="rightHand"></div>
          </div>
          <div class="feet"><!-- 双脚 -->
              <div class="left_foot"></div>
              <div class="right_foot"></div>
          </div>
      </div>
  </div>
</template>
<style lang="less" scoped>
.left_hair_one{
    animation: lefthair 2s ease-in-out infinite;
}
@keyframes lefthair{
    0%,25%,31%,100%{
    }
    30%{
        transform: rotate(31deg) translate3d(-3/3px,-1/3px,0);
    }
}
.eyes .leftEye .left_blackEye,
.eyes .rightEye .right_blackEye{
    animation: blackeye 5s ease-in infinite;
}
@keyframes blackeye{
    0%,20%,50%,70%,100%{
        transform: translateX(0px);
    }
    30%,40%{
        transform: translateX(15/3px);
    }
    80%,90%{
        transform: translateX(-15/3px);
    }
}
.eyes .leftEye .left_blackEye .left_white,
.eyes .rightEye .right_blackEye .right_white{
    animation: whiteeye 5s ease-in-out infinite;
}
@keyframes whiteeye{
    0%,20%,50%,70%,100%{
        transform: translateX(0px);
    }
    30%,40%{
        transform: translate3d(3/3px,4/3px,0);
    }
    80%,90%{
        transform: translate3d(-15/3px,4/3px,0);
    }
}
.mouse .mouse_shape{
    animation: mouse 5s ease-in-out infinite;
}
@keyframes mouse{
    40%,43%{
        width: 45/3px;
        height: 25/3px;
        top:180/3px;
    }
    0%,35%,48%,100%{
        width: 55/3px;
        height: 35/3px;
        top:175/3px;
        transform:rotate(-35deg);
    }
}
.mouse .mouse_shape:after{
    animation: mouse_mask 5s ease-in-out infinite;
}
@keyframes mouse_mask{
    40%,43%{
        width: 60.5/3px;
        top:-19.3/3px;
        left:1.5/3px;
    }
    0%,35%,48%,100%{
        width: 70/3px;
        top:-16/3px;
        left:3/3px;
        transform:rotate(33deg);
    }
}
.hands .rightHand{
    animation:rightHand .8s ease-in-out infinite;
}
@keyframes rightHand{
    0%,50%,100%{
        transform: rotate(40deg);
    }
    30%{
        transform: rotate(37deg) translateX(1px);
    }
}
.hands .leftHand{
    animation:leftHand .8s ease-in-out infinite;
}
@keyframes leftHand{
    0%,50%,100%{
        transform: rotate(-40deg);
    }
    80%{
        transform: rotate(-37deg) translateX(-1px);
    }
}
.feet .right_foot{
    animation: rightfoot .8s ease-in-out infinite;
}
@keyframes rightfoot{
    0%,50%,100%{
        transform: rotate(0deg);
    }
    80%{
        transform: rotate(10deg);
    }
}
.feet .left_foot{
    animation: leftfoot .8s ease-in-out infinite;
}
@keyframes leftfoot{
    0%,50%,100%{
        transform: rotate(0deg);
    }

    30%{
        transform: rotate(-10deg);
    }
}
.wrapper{
  width: 300/3px;
  margin: 100/3px auto;
  position: fixed;
  top: -300px;
  left: 20px;
  z-index: 9999;
  .line{
    position: absolute;
    top: 0;
    left: 40px;
    width: 3px;
    height: 700px;
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
    background-color: rgb(174,81,68);
    overflow: hidden;
    .dot{
      width: 1px;
      height: 6px;
      margin-top: 6px;
      transform: rotateZ(65deg);
      background-color: #000000;
    }
  }
  .littleH{
    position: absolute;
    top: 700px;
    .bodyH{
      position: absolute;
      width: 240/3px;
      height: 400/3px;
      border:5/3px solid #000;
      border-radius: 115/3px;
      background: rgb(249,217,70);
      overflow: hidden;
      z-index: 2;
      .trousers{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100/3px;
        border-top: 6/3px solid #000;
        background: rgb(32,116,160);
        .condoleBelt{
          position: absolute;
          .left,.right{
            width: 100/3px;
            height: 16/3px;
            border:5/3px solid #000;
            background: rgb(32,116,160);
            position: absolute;
            top:-90/3px;
            left:-35/3px;
            z-index: 2;
            transform: rotate(45deg);
            &:after{
              content: '';
              width: 8/3px;
              height: 8/3px;
              border-radius: 50%;
              background: #000;
              position: absolute;
              top:4/3px;
              left:88/3px;
            }
          }
          .left{
            top:-88/3px;
            left:165/3px;
            transform:rotate(-45deg);
            &:after{
              left: 5/3px;
            }
          } 
        }
        .trousers_top{
          width: 160/3px;
          height: 60/3px;
          border:6/3px solid #000;
          border-bottom: none;
          border-radius: 0 0 5/3px 5/3px;
          background: rgb(32,116,160);
          position: absolute;
          bottom: 100/3px;
          left:34/3px;
        }
        .pocket{
          width: 60/3px;
          height: 45/3px;
          border:6/3px solid #000;
          border-radius: 0px 0px 25/3px 25/3px;
          position: absolute;
          bottom: 65/3px;
          left: 84/3px;
        }
        .line_right{
          width: 30/3px;
          height: 30/3px;
          border-bottom-left-radius: 100/3px;
          border-bottom:6/3px solid #000;
          border-left:6/3px solid #000;
          position: absolute;
          left: 0;
          bottom:60/3px;
          transform:rotate(-75deg);
        }
        .line_left{
          width: 30/3px;
          height: 30/3px;
          border-bottom-right-radius: 100/3px;
          border-bottom:6/3px solid #000;
          border-right:6/3px solid #000;
          position: absolute;
          right: 0;
          bottom:63/3px;
          transform:rotate(75deg);
        }
        .line_bottom{
          height: 40/3px;
          border:3/3px solid #000;
          border-radius: 3/3px;
          position: absolute;
          left:118/3px;
          bottom: 0px;
        }
      }
    }
    .eyes{
      position: relative;
      z-index: 3;
      .leftEye,.rightEye{
        width: 85/3px;
        height: 85/3px;
        border-radius: 50%;
        border:6/3px solid #000;
        background: #fff;
        position: absolute;
        top: 60/3px;
        left: 27/3px;
        &:after{
          content: '';
          width: 28/3px;
          height: 18/3px;
          background: #000;
          position: absolute;
          left:-30/3px;
          top:37/3px;
          transform:skewX(20deg) rotate(7deg);
        }
        .left_blackEye,.right_blackEye{
          width: 40/3px;
          height: 40/3px;
          border-radius: 50%;
          background: #000;
          position: absolute;
          top:24/3px;
          left:22/3px;
          .left_white,.right_white{
            width: 20/3px;
            height: 20/3px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            top:7/3px;
            left:17/3px;
          }
        }
      }
      .leftEye{
        left: 124/3px;
        &:after{
          left:89/3px;
          top:37/3px;
          transform:skewX(-20deg) rotate(-7deg);
        }
        .left_blackEye{
          .left_white{
            top:4/3px;
            left:17/3px;
          }
        }
      }
    }
    .mouse{
      position: relative;
      .mouse_shape{
        width: 55/3px;
        height: 35/3px;
        border:5/3px solid #000;
        border-bottom-left-radius: 30/3px;
        background: #fff;
        position: absolute;
        top:175/3px;
        left:98/3px;
        z-index: 3;
        transform:rotate(-35deg);
        &:after{
          content: '';
          width: 70/3px;
          height: 32/3px;
          border-bottom:5/3px solid #000;
          border-radius:35/3px 26/3px 5/3px 5/3px;
          background: rgb(249,217,70);
          position: absolute;
          top:-16/3px;
          left:3/3px;
          transform:rotate(34deg);
          animation: mouse_mask 5s ease-in-out infinite;
        }
      }
    }
    .hands{
      position: relative;
      .leftHand,.rightHand{
        width: 80/3px;
        height: 80/3px;
        border:6/3px solid #000;
        border-radius: 25/3px;
        background: rgb(249,217,70);
        position: absolute;
        top:220/3px;
        left:-23/3px;
        transform:rotate(40deg);
        &:after{
          content: '';
          width: 6/3px;
          border:3/3px solid #000;
          border-radius: 3/3px;
          position: absolute;
          left:13/3px;
          top:50/3px;
          transform:rotate(90deg);
        }
      }
      .leftHand{
        left:182/3px;
        top:220/3px;
        transform:rotate(-40deg);
        &:after{
          left:53/3px;
          top:50/3px;
          transform:rotate(-90deg);
        }
      }
    }
    .feet{
      position: relative;
      .left_foot,.right_foot{
        width: 36/3px;
        height: 50/3px;
        border-bottom-right-radius: 6/3px;
        border-bottom-left-radius: 9/3px;
        background: #000;
        position: absolute;
        top: 406/3px;
        left:88/3px;
        transform-origin: right top;
        &:after{
          content: '';
          width: 60/3px;
          height: 35/3px;
          border-radius: 20/3px 10/3px 21/3px 15/3px;
          background: #000;
          position: absolute;
          left:-36/3px;
          top:14.4/3px;
          transform:rotate(5deg);
        }
      }
      .left_foot{
        border-bottom-right-radius: 9/3px;
        border-bottom-left-radius: 6/3px;
        left:130/3px;
        transform-origin: left top;
        &:after{
          border-radius: 10/3px 20/3px 15/3px 21/3px;
          left: 13/3px;
          transform:rotate(-5deg);
        }
      }
    }
    .hair{
      position: relative;
      .left_hair_one{
        width: 130/3px;
        height: 100/3px;
        border-radius: 50%;
        border-top:8/3px solid #000;
        position: absolute;
        left:17/3px;
        top:-17/3px;
        transform:rotate(27deg);
      }
      .left_hair_two{
        width: 80/3px;
        height: 80/3px;
        border-radius: 50%;
        border-top:6/3px solid #000;
        position: absolute;
        left:45/3px;
        top:-10/3px;
        transform:rotate(15deg);
      }

    }
  }
}
</style>