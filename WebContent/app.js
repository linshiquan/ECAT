Ext.application({
    name: 'ECAT',
    
    controllers: ['ListController'],
    views: ['Main','Menu','TopBar','ButtomBar'],
    models: ['Img'],
    stores: ['Imgs'],
   
    launch: function() {
//        Ext.Viewport.add(Ext.create('ECAT.view.List',{id : 'list_img'}));
        Ext.Viewport.add(Ext.create('ECAT.view.Main',{id : 'pl_main'}));
        Ext.Viewport.add(Ext.create('ECAT.view.Menu'));
        Ext.Viewport.add(Ext.create('ECAT.view.TopBar'));
        Ext.Viewport.add(Ext.create('ECAT.view.ButtomBar'));
    }
});
