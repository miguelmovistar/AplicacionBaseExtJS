Ext.define('MVC.controller.Detail', {
    extend: 'Ext.app.Controller',

    init: function () {

        this.control({
            'mvc-DetailView > button#SaveRecord': {
                click: this.onSaveButtonClick
            },

            'mvc-DetailView > button#DeleteRecord': {
                click: this.onDeleteButtonClick
            },

            'mvc-DetailView > button#ExportRecord': {
                click: this.onExportButtonClick
            }

        });
    },

    onExportButtonClick: function (btn) {
        Ext.Msg.alert('Aplicación', 'El registro se exportará.');
    },

    onDeleteButtonClick: function (btn) {
        Ext.Msg.alert('Aplicación', 'El registro se borrará.');
    },

    onSaveButtonClick: function (btn) {
        
        // Se acceden a los valores del form
        var detailView = btn.up('mvc-DetailView');
        var data = detailView.getValues();

        // Se obtienen los datos de People que vienen del modelo Person
        var store = Ext.getStore('People');
        var record = store.getById(data.id);

        if (!record) {
            Ext.Msg.alert('Error', 'Sorry, no record with that ID exists.');

            return;
        }

        // Se actualiza el registro
        detailView.updateRecord();
    }
});