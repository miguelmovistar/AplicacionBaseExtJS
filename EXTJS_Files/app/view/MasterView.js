Ext.define('MVC.view.MasterView', {
    extend: 'Ext.form.Panel',
    xtype: 'mvc-MasterView',
    title: 'Detail Panel',
    frame: true,
    padding: 10,

    items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Nombre de la Institución:'
        },
        {
            xtype: 'hiddenfield',
            name: 'id'
        },
    ]
});