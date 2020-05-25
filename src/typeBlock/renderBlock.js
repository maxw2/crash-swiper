/**
 * @name    添加image
 * @param   {Array}     imgList
 * @param   {Object}    type
 * @param   {Object}    lis 
 * @return  {Object}    返回this.$dom
 */
function renderBlock(imgList, type, dom) {
    return renderLis(imgList, type, dom)
}
/**
 * @param   {Array}     imgList
 * @param   {Object}    type
 * @param   {Object}    dom
 * @return  {Object}    $dom 
 */
function renderLis(imgList, type, dom) {
    let $imgList = imgList
    let $dom = dom
    $dom.mask = {}
    // dom = {
    //     el:null,
    //     ul:null,
    //     lis:[],
    //     mask:{
    //         el:null,
    //         block:[]
    //     }
    // }
    // ul
    $dom.ul = document.createElement('div')
    $dom.ul.setAttribute('style', 'width:100%;height:100%;position:relative;overflow:hidden;')
    //
    // li
    $dom.lis = $imgList.map((src, index) => {
        let actionStyle = `width:100%;
        height:100%;
        position:absolute;
        top :0px;
        left:0px;
        display:flex;
        flex-wrap:wrap;
        background-image:url(${src});
        background-size:100% 100%`
        let style = `visibility:hidden;
        width:100%;
        height:100%;
        position:absolute;
        top:0px;
        left:0px;
        display:flex;
        flex-wrap:wrap;
        background-image:url(${src});
        background-size:100% 100%`               // width height 100%
        // create
        let li = document.createElement('div')
        // 标注序号
        li.setAttribute('data-num', index)
        // style
        // display
        if (index === 0) {
            li.setAttribute('style', actionStyle)
        } else {
            li.setAttribute('style', style)
        }

        // createImg
        let liObj = {
            el: li,
            src: src,
            child: []
        }
        // appchild
        $dom.ul.appendChild(li)

        return liObj
    })
    // mask
    $dom.mask.el = document.createElement('div')
    $dom.mask.el.setAttribute('style', `width:100%;height:100%;position:absolute;top:0px;left:-100%;display:flex;flex-wrap:wrap;`)
    $dom.ul.appendChild($dom.mask.el)
    // block
    $dom.mask.block = renderMaskBlock(type, $dom.mask)


    // render 
    $dom.el.appendChild($dom.ul)

    return $dom
}

function renderMaskBlock(type, mask) {
    let block = []
    let $type = type
    let $mask = mask
    let index = 0

    for (let r = 0; r < $type.rows; r++) {
        for (let c = 0; c < $type.cols; c++) {
            let style = `width:${100 / $type.rows}%;
            height:${100 / $type.cols}%;
            background-image:'';
            background-size:${100 * $type.rows}% ${100 * $type.cols}%;
            background-position:${100 * c / ($type.rows - 1)}% ${100 * r / ($type.cols - 1)}%`

            let div = document.createElement('div')
            // data-row data-col data-index
            div.setAttribute('data-row', r)
            div.setAttribute('data-col', c)
            div.setAttribute('data-index', index)
            // style
            div.setAttribute('style', style)
            // appendChild
            $mask.el.appendChild(div)
            block.push(div)

            // index
            index++
        }
    }



    return block
}
// 初始化
function initBlock(mask) {
    let $mask = mask

    $mask.block.forEach(ele => {
        ele.style.backgroundImage = ''
        ele.style.animation = ''
    });

}
// 执行动画移入
/**
 * @name  执行动画移入
 * @param {Object} mask 
 * @param {String} imgSrc 
 * @return {Number} 返回css动画列表索引
 */
function actionBlock(mask, imgSrc, type) {
    let $mask = mask
    let $imgSrc = imgSrc

    $mask.block.forEach((ele, index) => {
        let row = ele.getAttribute('data-row')
        let col = ele.getAttribute('data-col')
        ele.style.backgroundImage = `url(${$imgSrc})`
        if (row == 0 && col == 0) {
            ele.style.animation = `blockAnimation 1s ${0.1 * col * row}s forwards`
        } else if (row == 0) {
            ele.style.animation = `blockAnimation 1s ${0.1 * col}s forwards`
        } else if (col == 0) {
            ele.style.animation = `blockAnimation 1s ${0.1 * row}s forwards`
        } else {
            ele.style.animation = `blockAnimation 1s ${0.1 * col * row}s forwards`
        }



    })


}

function cssAnimation(type) {
    let keyframes = `@keyframes blockAnimation {
        0% {transform:translate3d(0px,0px,0px)}
        70% {transform:translate3d(${100 * type.rows + 50}%, 50% ,0px)}
        100% {transform:translate3d(${100 * type.rows}%, 0px,0px)}
    } `

    // 插入动画
    let CSSStyleSheet = document.styleSheets[0]
    let cssIndex = CSSStyleSheet.insertRule(keyframes)
    return cssIndex
}

function deteteAnimation(cssIndex) {
    let CSSStyleSheet = document.styleSheets[0]
    CSSStyleSheet.deteteRule(cssIndex)
}

export {
    renderBlock,
    initBlock,
    actionBlock,
    cssAnimation,
    deteteAnimation
} 