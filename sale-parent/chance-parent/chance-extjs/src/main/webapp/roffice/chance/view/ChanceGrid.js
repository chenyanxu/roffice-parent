/**
 * 项目机会表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.view.ChanceGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'Ext.grid.plugin.Exporter',
        'kalix.roffice.chance.store.ChanceStore',
        'kalix.roffice.chance.controller.ChanceGridController'
    ],
    alias: 'widget.chanceGrid',
    xtype: 'chanceGridPanel',
    controller:{
        type:'chanceGridController',
        storeId:'chanceStore',
        cfgForm: 'kalix.roffice.chance.view.ChanceWindow',
        cfgViewForm: 'kalix.roffice.chance.view.ChanceViewWindow',
        cfgModel: 'kalix.roffice.chance.model.ChanceModel'
    },
    store:{type:'chanceStore'},
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
                hidden: true
            }, {
                text: '项目名称',
                dataIndex: 'name'
            }, {
                text: '营销负责人',
                dataIndex: 'salerId'
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
                text: '预计签单时间',
                dataIndex: 'billDate',
                xtype: 'datecolumn',
                format: 'Y-m-d'
            }, {
                text: '售前支持负责人',
                dataIndex: 'supporterId'
            },
            {
                text: '描述',
                dataIndex: 'description'
            }, {
                text: '备注',
                dataIndex: 'comment'
            }
            ,
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:saleModule:chanceMenu:view',
                    'roffice:saleModule:chanceMenu:edit',
                    'roffice:saleModule:chanceMenu:delete'
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
                permission: 'roffice:saleModule:chanceMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            }
        ]
    },
    plugins: [
        {
            ptype: 'gridexporter'
        }],
    header: {
        itemPosition: 1, // after title before collapse tool
        items: [{
            ui: 'default-toolbar',
            xtype: 'button',
            text: '导出',
            iconCls: 'x-fa fa-file-excel-o',
            handler: 'exportToExcel'
        }]
    }
});
