/**
 * 项目支持表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.view.SupportGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.support.controller.SupportGridController',
        'kalix.roffice.support.store.SupportStore'
    ],
    alias: 'widget.supportGrid',
    xtype: 'supportGridPanel',
    controller:{
        type:'supportGridController',
        storeId:'supportStore',
        cfgForm: 'kalix.roffice.support.view.SupportWindow',
        cfgViewForm: 'kalix.roffice.support.view.SupportViewWindow',
        cfgModel: 'kalix.roffice.support.model.SupportModel'
    },
    store: {
        type: 'supportStore'
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
            }, {
                text: '项目名称',
                dataIndex: 'name'
            }, {
                text: '营销负责人',
                dataIndex: 'saler'
            }, {
                text: '项目类型',
                dataIndex: 'type'
            }, {
                text: '所属行业',
                dataIndex: 'industry'
            }, {
                text: '优先级',
                dataIndex: 'level'
            }, {
                text: '预算额度',
                dataIndex: 'budget'
            }, {
                text: '预计交付时间',
                dataIndex: 'billDate',
                xtype: 'datecolumn',
                format: 'Y-m-d'
            }, {
                text: '预计开始时间',
                dataIndex: 'startDate',
                xtype: 'datecolumn',
                format: 'Y-m-d'
            }, {
                text: '售前支持负责人',
                dataIndex: 'supporter'
            }, {
                text: '备注',
                dataIndex: 'comment'
            },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:saleModule:supportMenu:view',
                    'roffice:saleModule:supportMenu:edit',
                    'roffice:saleModule:supportMenu:delete'
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
                permission: 'roffice:saleModule:supportMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            }
        ]
    }
});
