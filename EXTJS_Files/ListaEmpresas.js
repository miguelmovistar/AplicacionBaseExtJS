Ext.Loader.setConfig({
    enabled: true
});
Ext.application({
    /*Global name used with all of the application's classes nested inside it*/
    name: 'ListaEmpresas',
    /*The folder which contains all the components*/
    appFolder: '../EXTJS_Files/app/',
    /*Load view*/
    views: [
        'EmpresasView'
    ],
    /*Load Model*/
    models: [
        'EmpresasModel'
    ],
    /*Load Store*/
    stores: [
        'EmpresasStore'
    ],
    /*Load Controller*/
    controllers: [
        'EmpresasController'
    ],
    /*Launch the app*/
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            style: {
                "background-color": "#ffffff",
                "border-color": "#c6c6c6"
            },
            items: [
                { xtype: 'EmpresasView' }
            ]
        });
    }
});