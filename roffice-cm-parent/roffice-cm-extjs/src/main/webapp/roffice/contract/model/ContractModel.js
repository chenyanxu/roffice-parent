/**model of contract
 *  @author chenyanxu
 *
 */
Ext.define("kalix.roffice.contract.model.ContractModel", {
    extend: "Ext.data.Model",
    constructor: function () {
        this.callParent(arguments);

        if (arguments.length == 0) {
            this.set('id', '0');
        }
    },
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/contracts',
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
        {name: 'contractNumber'},
        {name: 'projectId'},
        {name: 'projectName'},
        {name: 'partyA'},
        {name: 'partyB'},
        {name: 'summoney'},
        {name: 'grossProfit'},
        {name: 'grossProfitRate'},
        {name: 'receiveMoney'},
        {name: 'receivables'},
        {name: 'expectedCost'},
        {name: 'guarantee'},
        {name: 'contractStatus', defaultValue: 1},
        {name: 'userId'},
        {name: 'archive', defaultValue: false},
        {name: 'archive_date', type: 'date', dateFormat: 'Y-m-d h:i:s'},
        {name: 'contractDate', type: 'date', dateFormat: 'Y-m-d h:i:s'},
        {name: 'expireDate', type: 'date', dateFormat: 'Y-m-d h:i:s'},
        {name: 'remark'}
    ]
});
