// views/media-gallery.js
'use strict';
//(function() {


define([
  'models/media-gallery',
  'text!templates/media-gallery-social-share.html.tpl',
  'text!templates/media-gallery-layout.html.tpl',
  'text!templates/media-gallery-layout-mob.html.tpl',
  'text!templates/media-gallery-item.html.tpl',
  //
  'jquery',
  'owl',
  'owlRtl',
  'fullScreen',
  'caption',
  'sharrre'
          //'sharrre'
], function(
        MediaGalleryItemModel,
        templateSocial,
        templateLayout,
        templateLayoutMob,
        templateItem
        ) {



  var gPlusSharePhp = backboneApp.set.sharrrePhpProxyh;
  var MediaGallryView = Backbone.View.extend({
    imgBaseUrl: backboneApp.set.imgBaseUrl,
    $fullScreen: $(),
    $layout: $(),
    $slider: $(),
    $caption: $(),
    $social: $(),
    $title: $(),
    bannerVars: {},
    currentItem: null,
    id: null,
    itemsAmount: null,
    afterMoveUnhashedOnce: false,
    owlSliderGoTo: function(num) {
    },
    currentItemRtl: function() { // @toDo move to $.fn.owlCarouselRtl and $.fn.galleryCaptions
      return this.itemsAmount - this.currentItem + 1
    },
    initialize: function(attributes) {
      this.bannerVars = {
        state: window.backboneApp.set.gallery.adMobileActionCount,
        trigger: window.backboneApp.set.gallery.adMobileActionCount
      };
      this.collection = new Backbone.Collection([], {model: MediaGalleryItemModel});
      this.$elem = attributes.$elem;
      this.currentItem = attributes.currentItem || 1;
      this.id = attributes.id;
    },
    parse: function() {
      var _this = this;
      // GET FROM DOM
      $('.mg-item', _this.$elem).each(function(i, o) {
        var data = {
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          caption: $(".mg-capt", o).text()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
      });
      dbg('media gallery collection collected:');
      dbg(_this.collection);

      this.bindObjects();
    },
    parseMob: function() {
      var _this = this;
      // GET FROM DOM
      $('.mg-item', _this.$elem).each(function(i, o) {
        var data = {
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          caption: $(".mg-capt", o).text()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
        //adv
        if ((i + 1) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0) {
          dbg("---adv model---");
          var advModel = new MediaGalleryItemModel({
            type: 'adv',
            title: "<small>ADVERTISEMENT</small>",
            caption: ""
          });
          _this.collection.add(advModel);
        }
      });
      dbg('media gallery collection collected:');
      dbg(_this.collection);
      this.bindObjects();
    },
    bindObjects: function() {
      var itemTpl = _.template(templateItem);
      var itemsRdr = "";
      var socialTpl = _.template(templateSocial);
      var socialRdr = "";
      var captRdr = "";
      var clength = this.collection.length;
      var titlRdr = "";
      this.collection.each(function(item, i) {
        captRdr = "<div class='mg-caption'><p>" + item.attributes.caption + "</p></div>" + captRdr;
        titlRdr = "<div class='mg-title'><div class='num'>" + (i + 1) + "/" + clength + "</div><h3>" + item.attributes.title + "</h3></div>" + titlRdr;
        if (item.get('type') === 'adv') {
          itemsRdr += "<div class='advert-wrap'><div class='advert'>&nbsp;</div></div>";
          return true;
        }
        itemsRdr += itemTpl(item.attributes);
      });
      // social
      this.$social = $(socialTpl());
      this.sharrre(this.$social);
      // captions
      this.$captions = $("<div class='mg-captions'>" + captRdr + "</div>");
      this.$captions.galleryCaption();
      this.$captions.data('galleryCaption').goTo(-1);
      // titles
      this.$titles = $("<div class='mg-titles'>" + titlRdr + "</div>");
      this.$titles.galleryCaption();
      this.$titles.data('galleryCaption').goTo(-1);
      // slider
      this.$slider = $("<div class='mg-slider'>" + itemsRdr + "</div>");
      this.owlSlider(this.$slider);
    },
    render: function() {
      // Layout
      var layoutTpl = _.template(templateLayout);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-social-w', $layout).append(this.$social);
      // Full Screen   
      this.fullScreen();
    },
    renderMob: function() {
      // Layout
      var layoutTpl = _.template(templateLayoutMob);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    fullScreen: function() {
      var _this = this;
      this.fullScreen = this.$layout.fullModal({
        onClose: function() {
          backboneApp.router.navigate('_bb_', {trigger: true});
        },
        aditionalStyle: "body{background-color:black}",
        closeButton: false
      });
      $('.mg-close', this.$layout).click(function(e) {
        e.preventDefault();
        _this.fullScreen.close();
      });
    },
    close: function() {
      this.fullScreen.close();
      this.undelegateEvents();
      this.remove();
    },
    banner: function() {
      dbg('banner method, banner vars:');
      dbg(this.bannerVars);
      oxAsyncGallery.deviceType = backboneApp.set.device;
      var $layout = this.$layout;
      var v = this.bannerVars;
      var t1 = v.state >= v.trigger;
      var t2 = $('.owl-item.active .advert-wrap', $layout).length > 0;
      if (t1) {
        $('.mg-banner-lb', $layout).html('<div id="ad-gallery-lb" />');
        $('.mg-banner-mpu', $layout).html('<div id="ad-gallery-mpu" />');
        v.state = 0;
      }
      if (t2) {
        $('.owl-item.active .advert-wrap .advert', $layout).html('<div id="ad-gallery-mpu">&nbsp;</div>');
      }
      v.state++;
      if (t1 || t2) {
        dbg('banner triggered');
        oxAsyncGallery.asyncAdUnitsRender();
      }
    },
    sharrre: function($target) {
      var url = window.location.href;
      url = url.replace(/[^\/]*$/, '1'); // always to point first image in gallery
      var imgBaseUrl = this.imgBaseUrl;
      $('#facebook_share', $target).sharrre({
        share: {
          facebook: true
        },
        template: '<a class="box" href="#"><div class="share"><span><img src="' + imgBaseUrl + 'fbico.png" alt="" />شاركي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: false,
        click: function(api, options) {
          api.openPopup('facebook');
        },
        url: url
      });
      $('#twitter_share', $target).sharrre({
        share: {
          twitter: true
        },
        template: '<a class="box" href="#"><div class="share"><span><img src="' + imgBaseUrl + 'twitt.png" alt="" />غرّدي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: false,
        click: function(api, options) {
          api.openPopup('twitter');
        },
        url: url
      });
      $('#gplus_share', $target).sharrre({
        share: {
          googlePlus: true
        },
        template: '<a class="box" href="#"><div class="share"><span><img src="' + imgBaseUrl + 'gplus.png" alt="" />شاركي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: false,
        urlCurl: gPlusSharePhp,
        click: function(api, options) {
          api.openPopup('googlePlus');
        },
        url: url
      });
    },
    owlSlider: function($target) {
      var _this = this;
      $target.owlCarouselRtl({
        rtlJump: false,
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1111, 1],
        itemsTablet: [1109, 1],
        itemsTabletSmall: false,
        itemsMobile: [980, 1],
        singleItem: true,
        itemsScaleUp: false,
        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        //Autoplay
        autoPlay: false,
        stopOnHover: false,
        // Navigation
        navigation: true,
        navigationText: ["", ""],
        rewindNav: true,
        scrollPerPage: false,
        //Pagination
        pagination: false,
        paginationNumbers: false,
        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme",
        //Lazy load
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        //Auto height
        autoHeight: false,
        //JSON 
        jsonPath: false,
        jsonSuccess: false,
        //Mouse Events
        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: false,
        //Transitions
        transitionStyle: false,
        // Other
        addClassActive: true,
        //Callbacks
        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: function() {
          _this.afterInit();
        },
        beforeMove: false,
        afterMove: function() {
          _this.afterMove();
        },
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
      });

    },
    afterInit: function() {
      var _this = this;
      this.itemsAmount = this.$slider.data('owlCarousel').itemsAmount;
      this.owlSliderGoTo = function(num) {
        _this.$slider.data('owlCarousel').goTo(this.itemsAmount - num);
      };
      dbg('jumping to currentItem from #hash  ' + this.currentItem);
      if (this.currentItem != this.itemsAmount) {
        this.$slider.data('owlCarousel').jumpTo(this.currentItemRtl() - 1);
      } else {
        this.afterMove();
      }
    },
    onResize: function() {
    },
    afterMove: function() {
      dbg('afterMove event');
      this.currentItem = this.itemsAmount - this.$slider.data('owlCarousel').currentItem;
      if (!this.afterMoveUnhashedOnce) {
        window.backboneApp.router.navigate('media-gallery/' + this.id + "/" + this.currentItem);
      }
      else {
        this.afterMoveUnhashedOnce = false;
      }
      this.$captions.data('galleryCaption').goTo(this.currentItemRtl() - 1);
      this.$titles.data('galleryCaption').goTo(this.currentItemRtl() - 1);
      this.banner();
    }
  });

  return MediaGallryView;

});

//});