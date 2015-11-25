/**
 * 合同报表模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.contactreport.model.ContactReportModel', {
    extend: 'kalix.model.BaseModel',

    fields: [
        {name:'manager'},
        {name: 'contractNumber'},
        {name: 'projectType'},
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
        {name: 'remark'}
    ]
});
