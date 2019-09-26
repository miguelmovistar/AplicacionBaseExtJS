/*Defining the name space as the UserStore.js id inside store folder within app folder*/
Ext.define('ListaEmpresas.store.EmpresasStore', {
    extend: 'Ext.data.Store',
    /*Model for the store*/
    model: 'ListaEmpresas.model.EmpresasModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        method: 'POST',
        url: '../data/Empresas.json',
        reader:
        {
            type: 'json'
        }
    }
});