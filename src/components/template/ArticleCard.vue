<template>
    <div class="article-card">
        <el-card :body-style="{ padding: '0px', width: '8rem',height: '2.5rem' }">
            <div class="article-item">
                <div class="item-image" :style="{backgroundImage: `url(${banner})`}">
                    <div class="image-mask">
                        <h4 class="item-title font-28 m-b-20 m-t-85">{{title}}</h4>
                        <p class="item-date font-14">{{date | formatDate('yyyy-MM-dd hh:mm:ss')}}</p>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            default: ""
        },
        banner: {
            type: String,
            default: ""
        },
        date: {
            type: Number,
            default: 0
        }
    },
    name: "ArticleCard"
}
</script>
<style lang="less" scoped>
.article-card {
    width: 100%;
    height: 2.5rem;
    margin: 0 auto;
    margin-top: 0.32rem;
    transition: all .5s;
    &:hover {
        transform: scale(1.03, 1.03);
        transition: all .5s;
    }
    .article-item {
        height: 100%;
        .item-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            color: #FFFFFF;
            .image-mask {
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.25);
                overflow: hidden;
                cursor: pointer;
                text-align: center;
                .item-title {
                    font-weight: 400;
                }
            }
        }
    }
}
</style>