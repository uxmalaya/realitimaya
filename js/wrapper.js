var theWrapper = {
  setting: {
    baseFont: 16,
    sourceWidth: 1920,
    sourceHeight: 1080,
  },
  init: function(baseFont, sourceWidth, sourceHeight){
    // create outer wrapper
    var outerWrapper = document.createElement('div');
    outerWrapper.className  = 'outerWrapper';
    document.body.appendChild(outerWrapper);

    // create inner wrapper
    var innerWrapper = document.createElement('div');
    innerWrapper.className  = 'innerWrapper';
    innerWrapper.style.overflow = 'hidden';
    outerWrapper.appendChild(innerWrapper);

    // move content into inner wrapper
    var contentEl = document.querySelector('.wrapper');
    innerWrapper.appendChild(contentEl);

    // create listener for window resize
    var _this = this;
    window.addEventListener("resize", function(){
      _this.resizeWrapper();
    });
    window.addEventListener("orientationchange", function(){
      _this.resizeWrapper();
    });

    // set setting
    this.setting.baseFont = (!baseFont) ? this.setting.baseFont : baseFont;
    this.setting.sourceWidth = (!sourceWidth) ? this.setting.sourceWidth : sourceWidth;
    this.setting.sourceHeight = (!sourceHeight) ? this.setting.sourceHeight : sourceHeight;

    // init resize
    _this.resizeWrapper();
  },
  getAspectRatio: function(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth * ratio, height: srcHeight * ratio, ratio: ratio };
  },
  resizeWrapper: function() {
    // set base font, get aspect ratio
    var _tmpSize = this.getAspectRatio(this.setting.sourceWidth, this.setting.sourceHeight, window.innerWidth, window.innerHeight);
    var _fs = this.setting.baseFont * _tmpSize.ratio;

    // set html base font on resize
    var htmlEl = document.querySelector('html');
    htmlEl.style.fontSize = _fs + 'px';

    // set outer wrapper style
    var outerWrapperEl = document.querySelector('.outerWrapper');
    outerWrapperEl.style.background = '#000';
    outerWrapperEl.style.width = window.innerWidth+'px';
    outerWrapperEl.style.height = window.innerHeight+'px';
    outerWrapperEl.style.position = 'absolute';
    outerWrapperEl.style.top = 0;
    outerWrapperEl.style.left = 0;

    // set inner wrapper style
    var innerWrapperEl = document.querySelector('.innerWrapper');
    innerWrapperEl.style.background = '#ffffff';
    innerWrapperEl.style.width = _tmpSize.width + 'px';
    innerWrapperEl.style.height = _tmpSize.height + 'px';
    innerWrapperEl.style.position = 'absolute';
    innerWrapperEl.style.top = '50%';
    innerWrapperEl.style.left = '50%';
    innerWrapperEl.style.marginLeft = (-_tmpSize.width / 2) + 'px';
    innerWrapperEl.style.marginTop = (-_tmpSize.height / 2) + 'px';
  }
};

theWrapper.init();