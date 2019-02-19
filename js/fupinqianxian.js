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
                'images/b01.jpg',
                'images/b02.jpg',
                'images/b03.jpg',
                'images/b04.jpg'
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
                    this.mark = 3;
                    return
                }
            },
            next() {
                this.mark++;
                if (this.mark === 4) {
                    this.mark = 0;
                    return
                }
            },
            autoPlay() {
                this.mark++;
                if (this.mark === 4) {
                    this.mark = 0;
                    return
                }
            },
            play() {
                this.time = setInterval(this.autoPlay, 3000);
            },
            enter() {
                console.log('enter')
                clearInterval(this.time);
            },
            leave() {
                console.log('leave')
                this.play();
            }
        },
        created() {
            this.play()
        }
    })
}