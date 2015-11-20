/**model of invoice
 *  @author chenyanxu
 *
 */
Ext.define("kalix.roffice.invoice.model.InvoiceModel", {
    extend: "kalix.model.BaseModel",
    fields: [
        {name: 'invoiceNo'},
        {name: 'money'},
        {name: 'rate'},
        {name: 'contractId'},
        {name: 'invoiceDate', type: 'date', dateFormat: 'Y-m-d H:i:s'},
    ]
});
