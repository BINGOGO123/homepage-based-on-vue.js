// 该文件创建一个用于展示多项图片的组件
Vue.component("image-box",{
    props:{
        imageList:{
            type:Array,
            required:false
        },
        rawImage:{
            type:Boolean,
            default:false
        }
    },
    data:function(){
        return {
            selected:0
        }
    },
    template:`
    <div class="image-box">
        <div class="image-display">
            <img :src="imageList[selected]" ref="img" :class="{animated:true,'raw-image':rawImage}" alt="图片无法显示" />
        </div>
        <div class="select">
            <div class="option" v-for="(image,index) in imageList" @click="convert(index)">
                <i :class="{fa:true,'fa-circle':index==selected,'fa-circle-thin':index!=selected}"></i>
            </div>
        </div>
    </div>
    `,
    methods:{
        convert:function(order){
            // 如果选择的按钮和目前selected相同则直接返回
            if(order == this.selected)
                return;
            // this.$refs.img.className = "animated rollOut"
            // this.$refs.img.className = "animated rollIn"
            this.selected = order; 
        }
    }
});