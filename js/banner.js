{
    /*
        轮播逻辑
        效果 ==> 图片显示第几章的时候，下面的bullet的第几个就要改变成active
                点击相应的bullet可以切换到对应的图片
    */

    //初始化一个vue实例然后挂载到父元素上，并设定数据为图片的数组，以及后面计数用的mark，mark初始值为0
    var vm = new Vue({
        el: '.carousel',
        data: {
            mark: 0,
            img: [
                'img/b01.png',
                'img/b02.png',
                'img/b03.jpg',
                'img/b04.jpg'
            ],
            time: null
        },
        methods: {   //添加方法
            change(i) {
                this.mark = i;
            },
            prev() {
                this.mark--;
                if (this.mark === -1) {
                    // this.img.length是图片的个数
                    this.mark = this.img.length-1;
                    return
                }
            },
            next() {
                this.mark++;
                if (this.mark === this.img.length) {
                    this.mark = 0;
                    return
                }
            },
            autoPlay() {
                this.mark++;
                if (this.mark === this.img.length) {
                    this.mark = 0;
                    return
                }
            },
            play() {
                this.time = setInterval(this.autoPlay, 3000);
            },
            enter() {
                clearInterval(this.time);//鼠标移入清空时间函数停止轮播
            },
            leave() {
                this.play();//鼠标离开继续轮播
            }
        },
        created() {
            this.play();
        }
    })
}