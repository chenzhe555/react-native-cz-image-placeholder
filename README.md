## Manual installation

npm install react-native-cz-image-placeholder --save


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

###  2.方法说明:
```
/*
* 更换图片地址
* */
this.imagePlaceholder.modifyImageUrl('url');
```

###  3.属性说明:
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
priority: 图片下载优先级: CZImagePlaceholder.priority.normal
```
```
cache: 下载缓存策略: CZImagePlaceholder.cacheControl.immutable
```
```
resizeMode: 图片显示类型: CZImagePlaceholder.resizeMode.contain
```
```
evaluateView(Func): 赋值当前视图对象
```
```
onLoadStart(Func): 开始下载网络图片
```
```
onLoad(Func): 下载成功
```
```
onError(Func): 下载失败
```
```
onLoadEnd(Func): 加载完成，无论成功失败都会调用
```
