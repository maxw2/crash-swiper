import eventOrigin from '../typeOrigin/eventOrigin'
import eventBlock from '../typeBlock/eventBlock'

function event(CSwiper) {
    // 
    CSwiper.prototype.event = function () {

        switch(this.$op.type) {
            case 1:
                eventOrigin(this)
                break;
            default:
                eventBlock(this)
                return 
        }


    }



}

export default event