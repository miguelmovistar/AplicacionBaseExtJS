Ext.application({
    name: 'Fiddle',
    launch: function () {
        Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            store: Ext.create('Ext.data.Store', {
                fields: ['firstName', 'lastName'],
                data: [
                {
                    firstName: 'Andrew',
                    lastName: 'Johnson'
                }, {
                    firstName: 'Sarah',
                    lastName: 'Exampleface'
                }, {
                    firstName: 'Johnny',
                    lastName: 'Walker'
                }, {
                    firstName: 'Elmo',
                    lastName: 'Johnson'
                    }
                ]
            }),
            columns: [
                {
                header: 'First Name',
                dataIndex: 'firstName'
                },
                {
                header: 'Last Name',
                dataIndex: 'lastName'
                }
            ],
            tbar: [
                {
                text: 'Buscar',
                handler: function (btn) {
                    var store = btn.up('grid').getStore();
                    store.filterBy(function (record, id) {
                        return record.get('lastName') === Ext.getCmp('IdNombre').value;// 'Johnson';
                        });
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'IdNombre',
                    id: 'IdNombre'
                },
                {
                text: 'Clear Filter',
                handler: function (btn) {
                    var store = btn.up('grid').getStore();
                    store.clearFilter();
                    }
                }
            ]
        })

    }
});