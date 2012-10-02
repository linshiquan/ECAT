Ext.application({
    name: 'ECAT',
    
    controllers: ['ListController'],
    views: ['List','Menu','TopBar','ButtomBar'],
    models: ['Img'],
    stores: ['Imgs'],
   
    launch: function() {
//        Ext.Viewport.add(Ext.create('ECAT.view.List',{id : 'imagelist'}));
        Ext.Viewport.add({xtype : 'list_img',id : 'imagelist'});
        Ext.Viewport.add(Ext.create('ECAT.view.Menu'));
        Ext.Viewport.add(Ext.create('ECAT.view.TopBar'));
        Ext.Viewport.add(Ext.create('ECAT.view.ButtomBar'));
    }
});
