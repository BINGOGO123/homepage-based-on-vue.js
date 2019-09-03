// 这个文件时是网页左上角图标组件
Vue.component("function-logo",{
    template:`
    <transition name="logo">
        <div :class="{'function-logo':true,opened:opened}">
            <div class="logo" @click="changeOpen">
                B
            </div>
            <i 
            :class="{'fa-times':!hover,fa:true,close:true,'fa-times-circle':hover}" 
            v-if="opened" 
            @click="changeOpen"
            @mouseenter="hover=true"
            @mouseleave="hover=false"
            ></i>
            <div class="content">
                <img src="images/head.jpg" />
                <div class="detail-info">
                    <div class="info large">
                        臧海彬
                    </div>
                    <div class="info">
                        同济大学嘉定校区、同济大学大四本科生、电子与信息工程学院计算机科学与技术、家乡是山东青岛
                    </div>
                    <div class="info">
                        <span>邮箱：</span>416778940@qq.com</span>
                    </div>
                    <div class="info">
                        <span>微信：</span>ppkk7733</span>
                    </div>
                    <div class="info">
                        <span>github：</span><a href="https://github.com/BINGOGO123" target="_BLANK">https://github.com/BINGOGO123</a></span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    `,
    data:function(){
        return {
            opened:false,
            hover:false
        };
    },
    methods:{
        changeOpen:function(){
            this.opened=!this.opened;
            this.hover=false;
        }
    }
});