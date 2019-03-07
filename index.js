import React, {Component} from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

/*
* defaultSource: 默认图: require('./images/xxx.png')
* url: 图片地址: ''
* width: 图片宽
* height: 图片高
* style: 图片样式: {borderRadius: 50}
* headers: 图片headers: {"x": "y"}
* priority: 图片下载优先级: CZImagePlaceholder.priority.normal (low, high)
* cache: 下载缓存策略: CZImagePlaceholder.cacheControl.immutable (web, cacheOnly)
* resizeMode: 图片显示类型: CZImagePlaceholder.resizeMode.contain (cover, stretch, center)

* func:
* evaluateView: 赋值当前视图对象
* onLoadStart: 开始下载网络图片
* onLoad(event): 下载成功
* onError: 下载失败
* onLoadEnd: 加载完成，无论成功失败都会调用

export func:
modifyImageUrl: 更换图片地址
 */
export default class CZImagePlaceholder extends Component{

    /**************************** 枚举类型(对外使用) ****************************/
    //下载优先级
    static priority = {
        low: FastImage.priority.low,
        normal: FastImage.priority.normal,
        high: FastImage.priority.high
    }

    //显示类型
    static resizeMode = {
        contain: FastImage.resizeMode.contain,
        cover: FastImage.resizeMode.cover,
        stretch: FastImage.resizeMode.stretch,
        center: FastImage.resizeMode.center
    }

    //下载缓存策略
    static cache = {
        immutable: FastImage.cacheControl.immutable,
        web: FastImage.cacheControl.web,
        cacheOnly: FastImage.cacheControl.cacheOnly
    }

    /**************************** 枚举类型(内部使用) ****************************/
    static Status = {
        NoDown: 1,
        isDownLoading: 2,
        DownSuccess: 3,
        DownFail: 4
    }

    /**************************** 生命周期 ****************************/
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url ? this.props.url : ''
        }
        //下载状态值
        this.status = CZImagePlaceholder.Status.NoDown;
    }

    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            url: nextProps.url ? nextProps.url : '' 
        });
    }

    /**************************** 对外提供到方法 ****************************/
    /*
    * 更换图片地址
    * */
    modifyImageUrl = (url = '') => {
        if (url.length > 0) {
            this.status = CZImagePlaceholder.Status.NoDown;
            this.setState({
                url: url
            })
        }
    }

    /**************************** Render中方法 ****************************/
    //开始下载网络图片
    _onLoadStart = () => {
        this.status = CZImagePlaceholder.Status.isDownLoading;
        if (this.props.onLoadStart) this.props.onLoadStart();
    }

    //下载成功
    _onLoad = (event) => {
        this.status = CZImagePlaceholder.Status.DownSuccess;
        this.forceUpdate();
        if (this.props.onLoad) this.props.onLoad(event);
    }

    //下载失败
    _onError = () => {
        this.status = CZImagePlaceholder.Status.DownFail;
        this.forceUpdate();
        if (this.props.onError) this.props.onError();
    }

    //加载完成，无论成功失败都会调用
    _onLoadEnd = () => {
        if (this.props.onLoadEnd) this.props.onLoadEnd();
    }

    render() {
        //url: 图片地址
        const { url } = this.state;
        //status: 下载状态
        const { status } = this;


        //宽高
        let width = this.props.width ? this.props.width : 0;
        let height = this.props.height ? this.props.height : 0;
        //默认图
        let defaultSource = this.props.defaultSource ? this.props.defaultSource : require('./images/cz_default_image.png');
        //图片样式
        let style = this.props.style ? this.props.style : {};
        //图片headers
        let headers = this.props.headers ? this.props.headers : {};
        //图片下载优先级
        let priority = this.props.priority ? this.props.priority : FastImage.priority.normal;
        //图片显示Mode
        let resizeMode = this.props.resizeMode ? this.props.resizeMode : FastImage.resizeMode.contain;
        //cache
        let cache = this.props.cache ? this.props.cache : FastImage.cacheControl.immutable;

        //是否显示默认图
        let shwoDefaultImage = true;
        //是否显示loading图
        let showLoading = true;
        if (status == CZImagePlaceholder.Status.NoDown) {
            showLoading = false;
        } else if (status == CZImagePlaceholder.Status.isDownLoading) {

        } else if (status == CZImagePlaceholder.Status.DownSuccess) {
            shwoDefaultImage = false;
            showLoading = false;
        } else if (status == CZImagePlaceholder.Status.DownFail) {
            showLoading = false;
        }

        let contentView = null;
        if (url.length > 0) {
            if (width != 0 && height != 0) {
                contentView = (
                    <View>
                        <FastImage
                            style={[{width: width, height: height, zIndex: 1}, style]}
                            source={{
                                uri: url,
                                headers: headers,
                                priority: priority,
                                cache: cache
                            }}
                            resizeMode={resizeMode}
                            onLoadStart={this._onLoadStart}
                            onLoad={this._onLoad}
                            onError={this._onError}
                            onLoadEnd={this._onLoadEnd}
                        />
                        {
                            shwoDefaultImage ? (
                                <Image source={defaultSource} style={[{width: width, height: height, zIndex: 2}, styles.AbsoluteImage, style]}/>
                            ) : null
                        }
                        {
                            showLoading ? (
                                <ActivityIndicator
                                    size={'large'}
                                    style={[{zIndex: 3}, styles.AbsoluteImage]}
                                />
                            ) : null
                        }
                    </View>
                )
            }
        } else {
            if (Object.keys(style).length > 0) {
                contentView = (
                    <Image style={style} source={defaultSource}/>
                );
            }
        }

        return (
            <View style={[styles.MainView]}>
                {contentView}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    AbsoluteImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})