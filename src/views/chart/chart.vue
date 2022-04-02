<template>
    <div class="zrender">
        <div id="zrender-canvas"></div>
  </div>
</template>

<script>
import {init,Group,Polygon} from "zrender";
export default {
    name: "Zrender",
    data() {
        return {
            zr: null,
            group: null
        }
    },
    methods: {
        init() {
            this.zr = init(document.getElementById("zrender-canvas"));
            this.group = new Group();
            this.drawPolygon();
        },
        drawPolygon() {
            const getDegree = index => 360 / 6 * (index + 0.5) + 90;
            const getRadian = degree => degree * Math.PI / 180;
            const list = [];
            const getPoints = (xp,yp,width,height) => {
                for(let i = 0; i < 6; i ++) {
                    const degree = getDegree(i),radian = getRadian(degree);
                    const x = Math.sin(radian) * width + xp;
                    const y = Math.cos(radian) * height + yp;
                    list.push([x,y]);
                }
                return list;
            }
            const polygon = new Polygon({
                shape: {
                    points: getPoints(400,400,50,50)
                },
                style: {
                    fill: '#75c68e', // 填充颜色，默认#000
                    stroke: '#000', // 描边颜色，默认null
                    lineWidth: 2 // 线宽， 默认1
                }
            })
            polygon.on('click', () => {
                polygon.attr({
                    style: {
                        fill: 'red'
                    }
                })
            })
            this.group.add(polygon)
        }
    },
    mounted() {
        this.init();
        this.zr.add(this.group);
    }
}
</script>
<style>
#zrender-canvas {
  height:700px;
}
</style>
