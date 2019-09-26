Ext.define('MVC.model.PersonModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'id',
            type: 'string'
        }
    ]
});