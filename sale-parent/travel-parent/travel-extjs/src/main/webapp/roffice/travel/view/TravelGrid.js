/**
 * 出差记录表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.view.TravelGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.travel.controller.TravelGridController',
        'kalix.roffice.travel.store.TravelStore',
    ],
    alias: 'widget.travelGrid',
    xtype: 'travelGridPanel',
    controller: {
        type: 'travelGridController',
        storeId: 'travelStore',
        cfgForm: 'kalix.roffice.travel.view.TravelForm',
        cfgViewForm: 'kalix.roffice.travel.view.TravelViewForm',
        cfgModel: 'kalix.roffice.travel.model.TravelModel'
    },
    store: {
        type: 'travelStore'
    },
    columns: {
        defaults: {flex: 1},
        items: [
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
        }, {
            text: '任务名称',
            dataIndex: 'name',
        }, {
            text: '出差人员',
            dataIndex: 'person',
        }, {
            text: '任务目标',
            dataIndex: 'target',
        }, {
            text: '出发时间',
            dataIndex: 'startDate',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            text: '回程时间',
            dataIndex: 'endDate',
            xtype: 'datecolumn',
            format: 'Y-m-d'

        }, {
            text: '结果评定人',
            dataIndex: 'resultPerson',
        }, {
            text: '完成情况',
            dataIndex: 'result',
        }, {
            text: '备注',
            dataIndex: 'comment',
        },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:saleModule:travelMenu:view',
                    'roffice:saleModule:travelMenu:edit',
                    'roffice:saleModule:travelMenu:delete'
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
                permission: 'roffice:saleModule:travelMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }

});
