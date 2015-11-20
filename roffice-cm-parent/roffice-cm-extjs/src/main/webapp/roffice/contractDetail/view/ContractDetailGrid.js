/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.view.ContractDetailGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.contractDetail.controller.ContractDetailGridController',
        'kalix.roffice.contractDetail.store.ContractDetailStore'
    ],
    alias: 'widget.contractDetailGrid',
    xtype: 'contractDetailGrid',
    controller: {
        type: 'contractDetailGridController',
        storeId: 'contractDetailStore',
        cfgForm: 'kalix.roffice.contractDetail.view.ContractDetailWindow',
        cfgViewForm: 'kalix.roffice.contractDetail.view.ContractDetailViewWindow',
        cfgModel: 'kalix.roffice.contractDetail.model.ContractDetailModel'
    },
    store: {
        type: 'contractDetailStore'
    },
    columns:{
        defaults:{flex:1},
        items:[
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                align: 'center',
                flex:0
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true,
                flex: 1
            },
            {
                text: '设备名称',
                dataIndex: 'name',
                flex: 1
            },
            {
                text: '供应商',
                dataIndex: 'provider',
                flex: 1
            },
            {
                text: '品牌',
                dataIndex: 'brand',
                flex: 1
            },
            {
                text: '型号',
                dataIndex: 'type',
                flex: 1
            },
            {
                text: '单价',
                dataIndex: 'price',
                flex: 1
            },
            {
                text: '数量',
                dataIndex: 'amount',
                flex: 1
            },
            {
                text: '单位',
                dataIndex: 'unit',
                flex: 1
            },
            {
                text: '追加',
                trueText: '是',
                falseText: '否',
                xtype: 'booleancolumn',
                dataIndex: 'additional',
                flex: 1
            },
            {
                text: '追加日期',
                dataIndex: 'addDate',
                xtype: 'datecolumn',
                flex: 1,
                format: 'Y-m-d'
            },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:cmModule:contractDetailMenu:view',
                    'roffice:cmModule:contractDetailMenu:edit',
                    'roffice:cmModule:contractDetailMenu:delete'
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:cmModule:contractDetailMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }]
    }
});
