Ext.define("ECAT.view.Image", {
    extend: 'Ext.Img',
    xtype:'ecatimage',
    config: {
    	mode:true,
		width: 768,
		height: 1024/*,
		draggable :new Ext.util.Draggable({'id':this.id})*/
    },
	beforeInitialize: function() {
        this.element.on({
            pinch: 'onPinch',
            scope: this
        });
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
	},
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
	}
});
Ext.define("ECAT.view.ImageDetailView", {
    extend: 'Ext.Carousel',
    xtype:'imagedetailview',
    requires: ['Ext.Img'],
    config: {
    	id:'imagedetailview',
    	indicator:false,
    	items : [{
    		xtype:'ecatimage',
    		id : 'imagedetail1'
    	},{
    		xtype:'ecatimage',
    		id : 'imagedetail'
    	},{
    		xtype:'ecatimage',
    		id : 'imagedetail2'
    	}],
    	fullscreen : true
    },
    initialize: function(){
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
	    
	    c.remove(container, false);
	    
	    if(direction=='forward'){
	    	var next = index + 2;
	    	if(next >= store.getCount()){
	    		next = next - store.getCount();
	    	}
	    	var nextModel = store.getAt(next);
	    	container.setSrc("resources/images/da/"+ nextModel.get('name') + ".png");
	    	container.index = next;
	    	 c.add(container);
	    } else{
	    	var last = index - 2;
			if(last < 0){
    			last = store.getCount() + last;
    		}
    		var lastModel = store.getAt(last);
			container.setSrc("resources/images/da/"+ lastModel.get('name') + ".png");
			container.index = last;
	    	c.insert(0,container);
	    }
  }
});