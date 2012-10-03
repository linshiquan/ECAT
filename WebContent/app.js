Ext.application({
    name: 'ECAT',
    
    controllers: ['ListController'],
    views: ['Main','Menu','TopBar','ButtomBar'],
    models: ['Img'],
    stores: ['Imgs'],
   
    launch: function() {
        Ext.Viewport.add(Ext.create('ECAT.view.Main',{id : 'pl_main'}));
        var top_bar = Ext.create('ECAT.view.TopBar',{img_total_count : Ext.getStore(Ext.getCmp('list_img').getConfig('store')).getCount()});
        Ext.Viewport.add(top_bar);
        top_bar.toImgListAll();
        Ext.Viewport.add(Ext.create('ECAT.view.Menu'));
        Ext.Viewport.add(Ext.create('ECAT.view.ButtomBar'));
    }
});
