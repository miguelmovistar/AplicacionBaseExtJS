Ext.application({
    name: 'MVC',

    views: [
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
            layout: 'border',
            items: [{
                region: 'north',
                html: '<h1 class="x-panel-header">Interfaz Contable</h1>',
                border: false,
                margin: '0 0 5 0'
            }, {
                region: 'west',
                collapsible: true,
                title: 'Navegación',
                width: 150
                // could use a TreePanel or AccordionLayout for navigational items
            }, {
                region: 'south',
                title: 'Información Adicional',
                collapsible: true,
                html: 'Este es un ejemplo con Sencha Ext JS',
                split: true,
                height: 100,
                minHeight: 100
            }, {
                region: 'east',
                title: 'Menú Lateral',
                collapsible: true,
                split: true,
                width: 150
            }, {
                region: 'center',
                xtype: 'tabpanel', // TabPanel itself has no title
                activeTab: 0,      // First tab active by default
                items: {
                    title: 'Provisiones',
                    html: 'Aquí irán las provisiones del mes actual'
                }
            }]
        });

        //Ext.create('Ext.container.Viewport', {
        //    items: [
        //        {
        //            xtype: 'mvc-MasterView',
        //            flex: 2
        //        },
        //        {
        //            xtype: 'mvc-DetailView',
        //            flex: 1
        //        }
        //    ]
        //});
    }
});