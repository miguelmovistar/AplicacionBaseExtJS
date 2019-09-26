Ext.application({
    name: 'MVC',
    appFolder: '../EXTJS_Files/app/',
    views: [
        'MasterView',
        'DetailView'
    ],

    controllers: [
        'DetailController'
    ],

    stores: [
        'PeopleStore'
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