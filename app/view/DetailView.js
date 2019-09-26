Ext.define('MVC.view.DetailView', {
    extend: 'Ext.form.Panel',
    xtype: 'mvc-DetailView',
    title: 'Detail Panel',
    frame: true,
    padding: 10,

    items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name'
        },
        {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email'
        },
        {
            xtype: 'textfield',
            name: 'phone',
            fieldLabel: 'Phone'
        },
        {
            xtype: 'hiddenfield',
            name: 'id'
        },
        {
            xtype: 'button',
            text: 'Guardar',
            itemId: 'SaveRecord'
        },
        {
            xtype: 'button',
            text: 'Borrar',
            itemId: 'DeleteRecord'
        },
        {
            xtype: 'button',
            text: 'Exportar',
            itemId: 'ExportRecord'
        }

    ]
});