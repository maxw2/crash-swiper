import eventOrigin from '../typeOrigin/eventOrigin'


function event(CSwiper) {
    // 
    CSwiper.prototype.event = function () {

        switch(this.$op.type) {
            case 1:
                eventOrigin(this)
                break;
            default:
                return 
        }


    }



}

export default event