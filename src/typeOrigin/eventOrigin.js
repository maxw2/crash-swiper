
function eventOrigin(CSwiper) {
    let that = CSwiper

    that.$el.addEventListener('transitionend', transitionend.bind(that))

    // left
    that.__proto__.onNext = function () {

        // 动画在移动中则退出
        if (this.$data.transition) return
        let oldNum = this.$num
        this.$data.transition = true
        //

        // 
        if (this.$num < this.$dom.lis.length - 1) {
            this.$num++
        } else {
            this.$num = 0
        }

        // 绑定准备移动的元素
        this.$data.active = this.$dom.lis[this.$num].el
        this.$data.oldActive = this.$dom.lis[oldNum].el


        // transition 
        // 初始化
        this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')
        // 准备进入
        this.$data.active.style.visibility = 'visible'
        this.$data.active.style.left = `100%`
        this.$data.active.style.transform = `translate3d(-100%,0px,0px)`
        this.$data.active.style.transition = `transform 1s ease 0s`

        // 准备移出
        this.$data.oldActive.style.visibility = 'visible'
        this.$data.oldActive.style.left = `0px`
        this.$data.oldActive.style.transform = `translate3d(-100%,0px,0px)`
        this.$data.oldActive.style.transition = `transform 1s ease 0s`



    }

    // right
    that.__proto__.onPrev = function () {
        // 动画在移动中则退出
        if (this.$data.transition) return
        let oldNum = this.$num
        this.$data.transition = true
        //

        // 
        if (this.$num > 0) {
            this.$num--
        } else {
            this.$num = this.$dom.lis.length - 1
        }

        // 绑定准备移动的元素
        this.$data.active = this.$dom.lis[this.$num].el
        this.$data.oldActive = this.$dom.lis[oldNum].el


        // transition 
        // 初始化
        this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')
        // 准备进入
        this.$data.active.style.visibility = 'visible'
        this.$data.active.style.left = `-100%`
        this.$data.active.style.transform = `translate3d(100%,0px,0px)`
        this.$data.active.style.transition = `transform 1s ease 0s`

        // 准备移出
        this.$data.oldActive.style.visibility = 'visible'
        this.$data.oldActive.style.left = `0px`
        this.$data.oldActive.style.transform = `translate3d(100%,0px,0px)`
        this.$data.oldActive.style.transition = `transform 1s ease 0s`


    }

    // 
    that.__proto__.onChange = function (number) {
        let num = Number(number)
        let dirRight = true
        // 动画在移动中则退出
        if (this.$data.transition) return
        // 顺序跟当前一致则退出
        if (num === this.$num) return
        //
        //
        let oldNum = this.$num
        this.$data.transition = true
        // 

        if (num >= 0 && num <= this.$dom.lis.length) {
            this.$num = num
            this.$num > oldNum ?
            dirRight = true : dirRight = false
        }

        // 绑定准备移动的元素
        this.$data.active = this.$dom.lis[this.$num].el
        this.$data.oldActive = this.$dom.lis[oldNum].el

        if (dirRight) {
            // transition 
            // 初始化
            this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')
            // 准备进入
            this.$data.active.style.visibility = 'visible'
            this.$data.active.style.left = `100%`
            this.$data.active.style.transform = `translate3d(-100%,0px,0px)`
            this.$data.active.style.transition = `transform 1s ease 0s`

            // 准备移出
            this.$data.oldActive.style.visibility = 'visible'
            this.$data.oldActive.style.left = `0px`
            this.$data.oldActive.style.transform = `translate3d(-100%,0px,0px)`
            this.$data.oldActive.style.transition = `transform 1s ease 0s`
        } else {
            // 初始化
            this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')
            // 准备进入
            this.$data.active.style.visibility = 'visible'
            this.$data.active.style.left = `-100%`
            this.$data.active.style.transform = `translate3d(100%,0px,0px)`
            this.$data.active.style.transition = `transform 1s ease 0s`

            // 准备移出
            this.$data.oldActive.style.visibility = 'visible'
            this.$data.oldActive.style.left = `0px`
            this.$data.oldActive.style.transform = `translate3d(100%,0px,0px)`
            this.$data.oldActive.style.transition = `transform 1s ease 0s`
        }










    }



}

function transitionend(ev) {
    ev.stopPropagation()

    // 初始化
    this.$data.active.setAttribute('style', 'width:100%;height:100%;position:absolute;top:0px;left:0px;')
    this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:hidden;position:absolute;top:0px;left:0px;')
    //
    this.$data.transition = false
    // 


}

export default eventOrigin