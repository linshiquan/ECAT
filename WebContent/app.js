Ext.application({
    name: 'ECAT',
    
    controllers: ['ListController'],
    views: ['List','ImageDetailView'],
   
    launch: function() {
        Ext.Viewport.add(Ext.create('ECAT.view.List'));
    }
});
