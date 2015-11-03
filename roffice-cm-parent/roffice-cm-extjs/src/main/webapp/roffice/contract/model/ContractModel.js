/**model of contract
 *  @author chenyanxu
 *
 */
Ext.define("kalix.roffice.contract.model.ContractModel", {
    extend: "Ext.data.Model",
    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: "managerId",
        type: "string"
    }, {
        name: "sellerId",
        type: "string"
    }, {
        name: 'userId',
        type: 'string'
    }
    ],
    proxy: {
        type: 'ajax',
        url: '/kalix/camel/rest/contracts'
    }
});
