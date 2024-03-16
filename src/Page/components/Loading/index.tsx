/*** 
 * @author hoapb2*
 *  @email [phambichhoa2410@gmail.com.vn]* 
 * 
 * @create date 15/03/2024* 
 * @modify date 15/03/2024* 
 * @desc [description]
 * */
import React, { PureComponent } from "react";
import LoadingManager from "./LoadingManager";
import Lottie from "react-lottie";
import animationData from "./ibcloadingcolor.json";
import "./styles.scss";
/*** @default default time for turnning off the loading screen even when the hideLoading() have yet got call*/
const TIME_OUT = 10 * 1000;
/*** @default Show Loading*/
export function showLoading() {
    const ref = LoadingManager.getDefault();
    if (!!ref) {
        ref.showLoading();
    }
}
/*** @default Hide loading*/
export function hideLoading() {
    const ref = LoadingManager.getDefault();
    if (!!ref) {
        ref.hideLoading();
    }
}
interface LoaderModalProps { }
interface LoaderModalStates { isVisible: boolean; }
/*** Component show loading*/
export default class LoaderModal extends PureComponent<LoaderModalProps, LoaderModalStates> {
    constructor(props: LoaderModalProps) {
        super(props);
        this.state = { isVisible: false, };
    } loadingTimeout: any = null;
    showLoading = () => {
        // if(__DEV__) return;   
        this.loadingTimeout = setTimeout(() => {
            this.setState({ isVisible: false });
        }, TIME_OUT);
        this.setState({ isVisible: true });
    };
    hideLoading = () => {
        // if(__DEV__) return;   
        if (this.loadingTimeout) clearTimeout(this.loadingTimeout);
        this.setState({ isVisible: false });
    };
    componentWillUnmount() {
        if (this.loadingTimeout)
            clearTimeout(this.loadingTimeout);
    }
    defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice", },
    };
    render() {
        const { isVisible } = this.state;
        return <div className={`loading__container ${isVisible ? 'show' : ''}`}>
            <Lottie options={this.defaultOptions} height={200} width={200} />
        </div>
    }
}