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
    }, {
        name: 'contractDate',
        type: 'date',
        dateFormat: 'Y-m-d'
    }
    ]
});
