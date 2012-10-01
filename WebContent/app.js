Ext.application({
    name: 'ECAT',

    views: ['All'],

    launch: function() {
        Ext.Viewport.add(Ext.create('ECAT.view.All'));
    }
});
