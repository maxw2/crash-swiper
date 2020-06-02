# crash-swiper

使用原生js编写的轮播图组件  
演示链接： [Demo](https://maxw2.github.io/crash-swiper/)

## Installation
```bash
npm i crash-swiper
```

## Usage

```python
import CSwiper from 'crash-swiper'

let swiper = new CSwiper(el,option)

```

## option

| key     | value                         | type |
|:-----   | :---------------------------  |:-----|
|imgList  | ['./img1.jpg','./img2.jpg']   |array |
|type     | {rows:number,cols:number} \| 1    |object \| number | 

## method
**onNext()** 下一张  
**onPrev()** 上一张   
**onChange(num)** 选择序列


## License
[MIT](https://choosealicense.com/licenses/mit/)
