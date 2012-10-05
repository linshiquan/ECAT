Ext.define("ECAT.view.Image", {
    extend: 'Ext.Img',
    xtype:'ecatimage',
    config: {
    	mode:true,
		width: 768,
		height: 1024//,
		//draggable :new Ext.util.Draggable({})
    },
	beforeInitialize: function() {
		this.callParent(arguments);
       /* this.element.on({
            pinch: 'onPinch',
            scope: this
        });*/
    },
  	onPinch : function(e) {
		var me = this, 
		target = e.getTarget(), 
		item = Ext.getCmp(target.id);
		alert('e.scale =  '+e.scale);
		//保持居中
		me.setTop((Ext.Viewport.getWindowHeight() - e.scale * item.getHeight() ) / 2 );
    	me.setLeft((Ext.Viewport.getWindowWidth() - e.scale * item.getWidth() ) / 2);
		me.setWidth(e.scale * item.getWidth());
    	me.setHeight(e.scale * item.getHeight());
	}/*,
	onTap : function(e) {
		var me = this, 
		target = e.getTarget(), 
		item = Ext.getCmp(target.id);
		e.scale = 0.9;
		//保持居中
		alert('e.scale =  '+e.scale);
		alert('Ext.Viewport.getWindowHeight() =  '+Ext.Viewport.getWindowHeight());
		alert('Ext.Viewport.getWindowWidth() =  '+Ext.Viewport.getWindowWidth());
		alert('top =  '+(Ext.Viewport.getWindowHeight() - e.scale * item.getHeight() ) / 2 );
		alert('left =  '+(Ext.Viewport.getWindowWidth() - e.scale * item.getWidth() ) / 2);
		//me.setTop((Ext.Viewport.getWindowHeight() - e.scale * item.getHeight() ) / 2 );
    	//me.setLeft((Ext.Viewport.getWindowWidth() - e.scale * item.getWidth() ) / 2);
		me.setTop((1024 - e.scale * item.getHeight() ) / 2 );
    	me.setLeft((768 - e.scale * item.getWidth() ) / 2);
		me.setWidth(e.scale * item.getWidth());
    	me.setHeight(e.scale * item.getHeight());
	}*/
});
Ext.define("ECAT.view.ImageDetailView", {
    extend: 'Ext.Carousel',
    xtype:'imagedetailview',
    requires: ['Ext.Img'],
    config: {
    	id:'imagedetailview',
    	indicator:false,
    	currentIndex : '',
    	items : [{
    		xtype:'ecatimage'
    	},{
    		xtype:'ecatimage'
    	},{
    		xtype:'ecatimage'
    	}],
    	fullscreen : true
    },
    initialize: function(){
    	this.callParent(arguments);
	    var me = this;
	    me.callParent();
	    
	    var isEven = function(nb){
	        return (nb%2 == 0) ? true : false;
	    };
	    
	    me.nbItems = me.getItems().length;
	    me.interval = (isEven(me.nbItems) ? me.nbItems/2 : (me.nbItems-1)/2);
	    me.setActiveItem(me.interval);
	    
	    me.on('activeitemchange', me.onActiveItemChange, me);
	   // if(me.delay > 0)
	    //  me.timeout = Ext.defer(me.rotate, me.delay, me);
  	},
  	onActiveItemChange: function(c,v,ov){
		var me = this;
	    
	   // if (me.timeout){
	   //   clearTimeout(me.timeout);
	    //  me.timeout = Ext.defer(me.rotate, me.delay, me);
	    //}
	    
	    var active = c.getActiveIndex(),
	        direction = (c.getItems().indexOf(v) > c.getItems().indexOf(ov)) ? 'forward' : 'backward',
	        container = (direction=='forward') ? c.getAt(active-me.interval-1) : c.getAt(active+me.interval+1),
			store = this.store, 
			index = this.getComponent(active).index;
			
		// 设置标题栏
    	this.setToolbarTitle(index, store);
	
	    c.remove(container, false);

		if (direction == 'forward') {
			this.setImageSrcForForward(container, store, index);
			c.add(container);
		} else {
			this.setImageSrcForBackward(container, store, index);
			c.insert(0, container);
		}
  },
  setToolbarTitle : function(index, store){
  		var topbar = Ext.getCmp('top_bar');
    	topbar.setTitle((index + 1) + '/' + store.getCount());
   		this.showCollect();
  },
  setCurrentImageSrc : function(store, currentIndex){
  	 	//var store = this.config.store,
	    //	currentIndex = this.config.currentIndex;
	    var	record = store.getAt(currentIndex),
	    	container = this.getAt(this.interval);
	    this.store = store;	
	   	container.setSrc(ECAT.lib.getDaImgSrc(record.get('name')));
    	container.index = currentIndex;
    	this.setImageSrcForForward(this.getAt(this.interval+1), store, currentIndex);
    	this.setImageSrcForBackward(this.getAt(this.interval-1), store, currentIndex);
  },
  setImageSrcForForward : function(container, store, index) {
		var next = index + 1;
		if (next >= store.getCount()) {
			next = next - store.getCount();
		}
		var nextModel = store.getAt(next);
		container.setSrc(ECAT.lib.getDaImgSrc(nextModel.get('name')));
		container.index = next;
	},
	setImageSrcForBackward : function(container, store, index) {
		var last = index - 1;
		if (last < 0) {
			last = store.getCount() + last;
		}
		var lastModel = store.getAt(last);
		container.setSrc(ECAT.lib.getDaImgSrc(lastModel.get('name')));
		container.index = last;
	},
	getActiveModel : function(){
	    var active = this.getActiveIndex(),
		store = this.store, 
		index = this.getComponent(active).index;
		return store.getAt(index);
	},
	showCollect : function(){
        var	imageDetailView = Ext.getCmp('imagedetailview'),
        	store = Ext.getStore('store_fav'),
        	activeModel = imageDetailView.getActiveModel(),
        	index = store.find('name', activeModel.get('name')),
        	btn_collect = Ext.getCmp('btn_collect');
    	// 已经被收藏
		if(index != -1){
			btn_collect.addCls('collectactive');
		} else{
			// 还未被收藏
			btn_collect.removeCls('collectactive');
		}
	}
});