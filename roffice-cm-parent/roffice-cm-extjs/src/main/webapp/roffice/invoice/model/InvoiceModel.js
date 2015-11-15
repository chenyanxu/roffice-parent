/**model of invoice
 *  @author chenyanxu
 *
 */
Ext.define("kalix.roffice.invoice.model.InvoiceModel", {
    extend: "Ext.data.Model",
    constructor: function () {
        this.callParent(arguments);

        if (arguments.length == 0) {
            this.set('id', 0);
        }
    },
    proxy: {
        type: "rest",
        url: '/kalix/camel/rest/invoices',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: 'json'
        }
    },
    fields: [
        {name: 'id'},
        {name: 'invoiceNo'},
        {name: 'money'},
        {name: 'rate'},
        {name: 'contractId'},
        {name: 'invoiceDate', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'version'}
    ]
});
