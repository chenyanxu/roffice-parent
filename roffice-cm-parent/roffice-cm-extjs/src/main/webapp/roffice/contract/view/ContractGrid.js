/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.view.ContractGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        //'kalix.roffice.contract.controller.ContractGridController',
        'kalix.controller.BaseGridController',
        'kalix.roffice.contract.store.ContractStore',
        'kalix.admin.dict.component.DictGridColumn',
        'kalix.view.components.common.SecurityGridColumnCommon',
        'kalix.view.components.common.SecurityGridColumnRUD'
    ],
    alias: 'widget.contractGrid',
    xtype: 'contractGrid',
    controller: {
        //type: 'contractGridController',
        type: 'baseGridController',
        storeId: 'contractStore',
        CFG_Form: 'kalix.roffice.contract.view.ContractForm',
        CFG_ViewForm: 'kalix.roffice.contract.view.ContractViewForm',
        CFG_Model: 'kalix.roffice.contract.model.ContractModel'
    },
    autoLoad: true,
    stripeRows: true,
    store: {
        type: 'contractStore'
    },
    columns: [
        {
            xtype: "rownumberer",
            text: "行号",
            width: 50,
            align: 'center'
        },
        {
            text: '编号',
            dataIndex: 'id',
            hidden: true,
            flex: 1
        },
        {
            text: '合同编号',
            dataIndex: 'contractNumber',
            flex: 1
        },
        {
            text: '项目名称',
            dataIndex: 'projectName',
            flex: 1
        }, {
            text: '甲方',
            dataIndex: 'partyA',
            flex: 1
        }, {
            text: '乙方',
            dataIndex: 'partyB',
            flex: 1
        },
        {
            text: '合同状态',
            xtype: 'dictGridColumn',
            dictType: 'contractStatus',
            dataIndex: 'contractStatus',
            flex: 1
        }
        ,
        {
            xtype: 'securityGridColumnRUD',
            permissions: [
                'roffice:cmModule:contractMenu:view',
                'roffice:cmModule:contractMenu:update',
                'roffice:cmModule:contractMenu:delete'
            ]
        }
    ],
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
    },

    /*
     grid 组件不自动绑定与 grid 相关的翻页工具条的 store 配置项
     需要手动指定工具条的 store
     */
    bbar: [{
        id: 'contract-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('contractStore'));
            }
        }
    }
    ]

});
