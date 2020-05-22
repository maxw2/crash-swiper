import init from './core/init'
import render from './core/render'
import event from './core/event'

var option = {
    imgList: [],
    type: {
        rows: 5,
        cols: 5
    }
}

var dom = {
    el:null,
    lis:[{
        el:null,
        imgSrc:null,
        child:null
    }]
}


function CSwiper(el, option) {
    this.$el = typeof el === 'string' ? document.querySelector(el) : el
    this.$op = option
    this.$dom = {
        el:this.$el
    }
    this.$data = {
        active:null,
        oldActive:null,
        transition:false
    }
    this.$num = 0

    this.render()
    this.event()
}

init(CSwiper)
render(CSwiper)
event(CSwiper)

export default CSwiper
