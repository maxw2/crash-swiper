import renderOrigin from '../typeOrigin/renderOrigin'

function render(CSwiper) {
    //
    CSwiper.prototype.render = function () {
            //
            switch (this.$op.type) {
                case 1:
                    this.$dom = renderOrigin(this.$op.imgList,this.$dom)
                    break;
                default:
                    break;
        
            }

    }
}

export default render