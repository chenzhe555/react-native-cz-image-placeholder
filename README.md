## Manual installation

npm install react-native-cz-image-placeholder --save

###依赖库

npm install react-native-fast-image --save


## Usage
###  1.引入组件
```
import ImagePlaceholder from 'react-native-cz-image-placeholder';

<ImagePlaceholder
    width={32}
    height={38}
    url={pic_label_image_url}
    defaultSource={require('../../../assets/images/good_default_icon.png')}
/>  
```

###  2.属性:
```
defaultSource: 默认图: require('./images/xxx.png')
```
```
url: 图片地址: ''
```
```
width: 图片宽
```
```
height: 图片高
```
```
style: 图片样式: {borderRadius: 50}
```
```
headers: 图片headers: {"x": "y"}
```
```
priority: 图片下载优先级: CZImagePlaceholder.priority.normal (low, high)
```
```
cache: 下载缓存策略: CZImagePlaceholder.cacheControl.immutable (web, cacheOnly)
```
```
resizeMode: 图片显示类型: CZImagePlaceholder.resizeMode.contain (cover, stretch, center)
```

###  3.属性方法:
```
evaluateView: 赋值当前视图对象
```
```
onLoadStart: 开始下载网络图片
```
```
onLoad(event): 下载成功
```
```
onError: 下载失败
```
```
onLoadEnd: 加载完成，无论成功失败都会调用
```

###  4.供外部调用的方法:
```
/*
* 更换图片地址
* */
this.imagePlaceholder.modifyImageUrl('url');
```
