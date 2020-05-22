/**
 * @name    添加image
 * @param   {Array}     imgList
 * @param   {Object}    lis 
 * @return  {Object}    返回this.$dom
 */
function typeOrigin(imgList, dom) {
    return renderLis(imgList, dom)
}
/**
 * @param   {Array}     imgList
 * @param   {Object}    dom
 * @return  {Object}    $dom 
 */
function renderLis(imgList, dom) {
    let $imgList = imgList
    let $dom = dom

    // ul
    $dom.ul = document.createElement('div')
    $dom.ul.setAttribute('style', 'width:100%;height:100%;position:relative;overflow:hidden;')
    //
    // li
    $dom.lis = $imgList.map((src, index) => {
        // create
        let li = document.createElement('div')
        // 标注序号
        li.setAttribute('data-num', index)
        // style
        // display
        if (index === 0) {
            li.setAttribute('style', 'width:100%;height:100%;position:absolute;top:0px;left:0px;')
        } else {
            li.setAttribute('style', 'width:100%;height:100%;visibility:hidden;position:absolute;top:0px;left:0px;')
        }

        // createImg
        let liObj = renderImg({
            el:li,
            src:src,
            child:null
        })

        // appchild
        $dom.ul.appendChild(li)

        return liObj
    })

    // render 
    $dom.el.appendChild($dom.ul)

    return $dom
}

function renderImg(li) {
    let obj = li
    // create img
    let img = document.createElement('img')
    // setSrc
    img.setAttribute('src', obj.src)
    // style
    img.setAttribute('style', 'width:100%')
    // appendChild
    obj.el.appendChild(img)
    // lis
    obj.child = img


    return obj
}



export default typeOrigin