<template>
    <div id="stage"></div>
</template>

<script>
import * as spritejs from 'spritejs';
const {Scene, Regular, Ring} = spritejs;
export default {
    data() {
        return {
            scene: null,
            layer: null,
            container: null,
            list: []
        }
    },
    methods: {
        init() {
            console.log(this.container);
            this.scene = new Scene({
                container: this.container,
                width: 1200,
                height: 600
            })
            this.layer = this.scene.layer();
            const shape = new Regular({
            pos: [100, 100],
            edges: 6,
            radius: 40,
            fillColor: '#75c68e'
            });
            shape.addEventListener('click',() => {
                shape.attr('fillColor', 'red');
                shape.attr('radius', 60);
            })
            this.layer.append(shape);
            // const ring = new Ring({
            //     pos: [100, 100],
            //     innerRadius: 40,
            //     outerRadius: 42,
            //     fillColor: 'blue'
            // });
            // this.layer.append(ring);
        }
    },
    mounted() {
        this.container = document.getElementById('stage');
        this.init();
        console.log(this.layer)
    }
}
</script>
<style lang="less" scoped>
#stage {
    width: 1200px !important;
    height: 600px !important;
    
}
// canvas{
//         height: auto!important;
//     }
</style>