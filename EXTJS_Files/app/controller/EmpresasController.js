/*Defining the name space as the UserStore.js id inside controller folder within app folder*/
Ext.define('ListaEmpresas.controller.EmpresasController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            /*Reference of the grid name*/
            'empresasView': {
                /*Double click event*/
                itemdblclick: this.editRow
            },
        });
    },
    editRow: function () {
        Ext.Msg.alert("Message", "Double click event on the row!");
    }
});