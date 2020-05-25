import { initBlock, actionBlock, cssAnimation } from './renderBlock'

function eventBlock(CSwiper) {
    let that = CSwiper

    that.$el.addEventListener('animationend', animationend.bind(that))

    that.__proto__.onNext = function () {
        if (this.$data.transition) return
        this.$data.transition = true
        //
        if (!this.$data.cssAnimation) this.$data.cssIndex = cssAnimation(this.$op.type)


        // 
        let oldNum = this.$num
        //
        if (this.$num < this.$dom.lis.length - 1) {
            this.$num++
        } else {
            this.$num = 0
        }
        // 
        this.$data.active = this.$dom.lis[this.$num].el
        this.$data.oldActive = this.$dom.lis[oldNum].el
        // 
        this.$data.cssIndex = actionBlock(this.$dom.mask, this.$op.imgList[this.$num], this.$op.type)

    }

    that.__proto__.onPrev = function () {
        if (this.$data.transition) return
        this.$data.transition = true
        //
        if (!this.$data.cssAnimation) this.$data.cssIndex = cssAnimation(this.$op.type)
        // 
        let oldNum = this.$num
        //
        if (this.$num > 0) {
            this.$num--
        } else {
            this.$num = this.$dom.lis.length - 1
        }
        // 
        this.$data.active = this.$dom.lis[this.$num].el
        this.$data.oldActive = this.$dom.lis[oldNum].el
        // 
        this.$data.cssIndex = actionBlock(this.$dom.mask, this.$op.imgList[this.$num], this.$op.type)
    }

    that.__proto__.onChange = function (num) {
        if (num >= 0 && num <= this.$dom.lis.length - 1 && num != this.$num) {
            if (this.$data.transition) return
            this.$data.transition = true
            if (!this.$data.cssAnimation) this.$data.cssIndex = cssAnimation(this.$op.type)
            let oldNum = this.$num
            this.$num = num
            // 
            this.$data.active = this.$dom.lis[this.$num].el
            this.$data.oldActive = this.$dom.lis[oldNum].el
            console.log(this.$data)

            // 
            this.$data.cssIndex = actionBlock(this.$dom.mask, this.$op.imgList[this.$num], this.$op.type)
        }
    }

    that.__proto__.remove = function () {
        that.el.removeEventListener('animationend', animationend.bind(that))
        let CSSStyleSheet = document.styleSheets[0]
        CSSStyleSheet.deleteRule(that.$data.cssAnimation)
    }


}


function animationend(ev) {
    ev.stopPropagation()
    if (!this.$data.transition) return
    // 当最后一个元素执行完毕
    let elNum = Number(ev.target.getAttribute('data-index'))
    let len = this.$op.type.rows * this.$op.type.cols - 1
    //
    if (elNum === len) {

        this.$data.transition = false

        this.$data.oldActive.style.visibility = 'hidden'
        this.$data.active.style.visibility = ''

        // 初始化mask
        initBlock(this.$dom.mask)
    }



}



export default eventBlock