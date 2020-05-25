import renderOrigin from '../typeOrigin/renderOrigin'
import { renderBlock } from '../typeBlock/renderBlock'

function render(CSwiper) {
    //
    CSwiper.prototype.render = function () {
        //
        switch (this.$op.type) {
            case 1:
                this.$dom = renderOrigin(this.$op.imgList, this.$dom)
                break;
            default:
                this.$dom = renderBlock(this.$op.imgList, this.$op.type, this.$dom)
                break;

        }

    }
}

export default render