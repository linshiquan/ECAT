Ext.application({
    name: 'ECAT',
    
    controllers: ['ListController'],
    views: ['List','Menu','TopBar','ButtomBar'],
   
    launch: function() {
        Ext.Viewport.add(Ext.create('ECAT.view.List'));
        Ext.Viewport.add(Ext.create('ECAT.view.Menu'));
        Ext.Viewport.add(Ext.create('ECAT.view.TopBar'));
        Ext.Viewport.add(Ext.create('ECAT.view.ButtomBar'));
    }
});
