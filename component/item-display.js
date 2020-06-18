// 该组件展示每个项目的标题、介绍信息、图片以及入口等信息
Vue.component("item-display",{
    props:{
        item:{
            type:Object,
            required:true
        },
        order:{
            type:Number,
            required:true
        }
    },
    data:function(){
        return {
            opened:false
        };
    },
    template:`
    <div class="item-display">
        <div class="info-display">
            <div class="title">{{item.title}}</div>
            <a v-if="item.entrance" :href="item.entrance" target="_blank"><span class="enter" title="let's go!">{{item.entranceInfo}}&nbsp;&nbsp;<i :class="'fa '+ item.entranceLogo"></i></span></a>
            <div class="clear"></div>
            <hr />
            <div class="introduction">
                <div><span class="introduction-span">简介：</span>{{item.introduction}}</div>
                <div v-if="item.codeAddress"><span class="introduction-span">查看代码：</span><a :href="item.codeAddress" target="_BLANK">{{item.codeAddress}}</a></div>
            </div>
            <image-box
            v-if="opened"
            :imageList="item.imageList"
            :rawImage="item.rawImage ? true : false"
            :height="item.height"
            :width="item.width"
            ></image-box>
        </div>
        <div v-if="item.imageList.length!=0" :class="{'open-button':true,opened:opened}" @click="open">
            <i :class="{fa:true,'fa-angle-double-down':!opened,'fa-times':opened}"></i>
        </div>
        <div class="order">
            <i>{{order}}</i>
        </div>
    </div>
    `,
    methods:{
        open:function(){
            this.opened=!this.opened;
        }
    }
});