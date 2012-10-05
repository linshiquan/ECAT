Ext.define("ECAT.view.Favorite", {
    extend: 'Ext.Container',
    requires: ['Ext.Img','Ext.data.Store','Ext.data.proxy.LocalStorage','ECAT.model.Img'], 
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : 'vertical',
    	store:	Ext.create('Ext.data.Store',{
    		model: 'ECAT.model.Img',
    		proxy: {
    			type: 'localstorage',
    			id  : 'favorite',
    		    reader: {
    		        type: 'json'
    		    }
    		},
    		autoLoad: true
    	}),
    	layout: {
	        type: 'vbox'
    	}
    },
    isEdit : false,
    del_imgs : [],
    initialize: function() {
        	this.callParent(arguments);
			var store = this.getConfig('store');
			this.renderImgList(store.getRange());
			
    },
    renderImgList : function(records){
    	var recordsLn = records.length,
		hc,i,img_name;
		for (i = 0; i < recordsLn; i++) {
			img_name = records[i].get('name');
			if(i % 3 == 0){
				hc = Ext.create('Ext.Container',{
					layout: 'hbox'
				});
				this.add(hc);
			}
			hc.add(Ext.create('Ext.Img',{
				mode:true,
			    height: 512,
			    width: 256,
				src: "resources/images/xiao/"+ img_name + ".png",
			    fileName : img_name
			}));
		}
    },
    refresh : function(){
    	this.removeAll(true,true); 
    	var store = this.getConfig('store');
        this.del_imgs = [];
		this.renderImgList(store.getRange());
    }
});


