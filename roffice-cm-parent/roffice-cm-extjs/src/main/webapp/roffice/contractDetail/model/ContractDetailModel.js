/**model of contractDetail
 *  @author chenyanxu
 *
 */
Ext.define('kalix.roffice.contractDetail.model.ContractDetailModel', {
    extend: 'kalix.model.BaseModel',
    fields: [
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
    ]
});
