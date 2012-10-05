Ext.define("ECAT.view.ImgList", {
    extend: 'Ext.Container',
    requires: ['Ext.Img','ECAT.model.Img'], 
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : 'vertical',
    	store:	null,
    	layout: {
	        type: 'vbox'
    	}
    },
    initialize: function() {
        	this.callParent(arguments);
        	var store = this.config.store;
    		if(store == null){
    			throw 'store is null!';
    		}
    		if(Ext.isString(store)){
				this.store = Ext.getStore(store);    			
    		}else{
	        	this.store = this.config.store;
    		}
			this.renderList();
			
    },
    renderList : function(){
    	var records = this.store.getRange(),
    		recordsLn = records.length,
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
				src: ECAT.lib.getXiaoImgSrc(img_name),
			    record : records[i]
			}));
		}
    },
    refreshList : function(){
    	this.removeAll(true,true); 
		this.renderList();
    }
});
