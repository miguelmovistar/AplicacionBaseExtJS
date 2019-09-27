// /scripts/app/app.js
Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'AM',
    appFolder: '../EXTJS_Files_Alfa/app/',
    controllers: [
        'Users'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: {
                xtype: 'userlist',
                region: 'center',
                margins: '5 5 5 5'
            }
        });
    }
});