class LoadingManager { 
    defaultLoading: any = null; 
    register(_ref: any) { 
        if (!this.defaultLoading) { 
            this.defaultLoading = _ref; 
        } 
    }
     unregister(_ref: any) { 
        if (!!this.defaultLoading && this.defaultLoading?._id === _ref?._id) { 
            this.defaultLoading = null; 
        } 
    } 
    getDefault() { return this.defaultLoading; } 
} 
    
    export default new LoadingManager();