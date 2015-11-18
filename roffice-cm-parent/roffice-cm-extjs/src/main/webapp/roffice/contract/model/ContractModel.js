/**model of contract
 *  @author chenyanxu
 *
 */
Ext.define("kalix.roffice.contract.model.ContractModel", {
    extend: "kalix.model.BaseModel",
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
        {name: 'contractStatus', defaultValue: '1',type:'string'},
        {name: 'userId'},
        {name: 'archive', defaultValue: false},
        {name: 'archive_date', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'contractDate', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'expireDate', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'remark'},
        {name: 'version'}
    ]
});
