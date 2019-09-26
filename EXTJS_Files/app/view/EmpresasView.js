/*Defining the name space as the UserGrid.js id inside view/user folder within app folder*/
Ext.define("ListaEmpresas.view.EmpresasView", {
    extend: "Ext.grid.Panel",
    alias: "widget.EmpresasView",
    autoHeight: true,
    style: 'margin-top: 10px;margin-left: 15px;margin-right: 20px;',
    title: '<span style="color: #525252;">User List</span>',
    store: 'EmpresasStore',
    name: 'empresasView',
    id: 'empresasView',
    loadMask: true,
    height: 500,
    syncRowHeight: true,
    columns: [
        {
            text: 'ID',
            sortable: true,
            dataIndex: 'id',
            locked: true,
            width: 120
        },
        {
            text: 'Name',
            dataIndex: 'name',
            locked: true,
            width: 350
        },
        {
            text: 'Address',
            dataIndex: 'address',
            width: 450
        },
        {
            text: 'Contact',
            dataIndex: 'contact',
            width: 250
        },
        {
            text: 'Telephone',
            dataIndex: 'telephone',
            width: 200
        }]
});