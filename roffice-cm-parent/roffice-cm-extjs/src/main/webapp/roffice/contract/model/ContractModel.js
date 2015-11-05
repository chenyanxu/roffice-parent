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
        {name: 'partyA'},
        {name: 'partyB'},
        {name: 'projectName'},
        {name: 'summoney'},
        {name: 'grossProfit'},
        {name: 'grossProfitRate'},
        {name: 'receiveMoney'},
        {name: 'receivables'},
        {name: 'expectedCost'},
        {name: 'guarantee'},
        {name: 'managerId'},
        {name: 'sellerId'},
        {name: 'userId'},
        {name: 'projectType'},
        {name: 'contractStatus '},
        {name: 'projectStatus'},
        {name: 'archive'},
        {name: 'contractDate', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'expireDate', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'archive_date', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'remark'}
    ]
});
