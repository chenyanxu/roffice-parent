/**model of contractDetail
 *  @author chenyanxu
 *
 */
Ext.define("kalix.roffice.contractDetail.model.ContractDetailModel", {
    extend: "Ext.data.Model",
    constructor: function () {
        this.callParent(arguments);

        if (arguments.length == 0) {
            this.set('id', 0);
        }
    },
    proxy: {
        type: "rest",
        url: '/kalix/camel/rest/contractDetails',
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
        {name: 'name'},
        {name: 'provider'},
        {name: 'brand'},
        {name: 'type'},
        {name:'price'},
        {name:'amount'},
        {name:'unit'},
        {name:'additional',defaultValue: false},
        {name: 'addDate', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'contractId'},
        {name: 'version'}
    ]
});
