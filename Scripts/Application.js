Ext.application({
    name: 'MVC',

    views: [
        'Master',
        'Detail'
    ],

    controllers: [
        'Detail'
    ],

    stores: [
        'People'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'mvc-MasterView',
                    flex: 2
                },
                {
                    xtype: 'mvc-DetailView',
                    flex: 1
                }
            ]
        });
    }
});