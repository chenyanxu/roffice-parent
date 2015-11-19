/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.view.ContractGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.contract.controller.ContractGridController',
        'kalix.roffice.contract.store.ContractStore',
        'kalix.admin.dict.component.DictGridColumn',
    ],
    alias: 'widget.contractGrid',
    xtype: 'contractGrid',
    controller: {
        type: 'contractGridController',
        storeId: 'contractStore',
        cfgForm: 'kalix.roffice.contract.view.ContractForm',
        cfgViewForm: 'kalix.roffice.contract.view.ContractViewForm',
        cfgModel: 'kalix.roffice.contract.model.ContractModel'
    },
    store: {
        type: 'contractStore'
    },
    columns:{
        defaults:{flex:1},
        items:[
        {
            xtype: "rownumberer",
            text: "行号",
            width: 50,
            flex:0,
            align: 'center'
        },
        {
            text: '编号',
            dataIndex: 'id',
            hidden: true
        },
        {
            text: '合同编号',
            dataIndex: 'contractNumber'
        },
        {
            text: '项目名称',
            dataIndex: 'projectName'
        }, {
            text: '甲方',
            dataIndex: 'partyA'
        }, {
            text: '乙方',
            dataIndex: 'partyB'
        },
        {
            text: '合同状态',
            xtype: 'dictGridColumn',
            dictType: 'contractStatus',
            dataIndex: 'contractStatus'
        }
        ,
        {
            xtype: 'securityGridColumnRUD',
            permissions: [
                'roffice:cmModule:contractMenu:view',
                'roffice:cmModule:contractMenu:edit',
                'roffice:cmModule:contractMenu:delete'
            ]
        }
    ]},
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:cmModule:contractMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
