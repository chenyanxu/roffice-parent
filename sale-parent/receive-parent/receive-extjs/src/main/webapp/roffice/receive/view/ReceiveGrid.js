/**
 * 项目回款表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.view.ReceiveGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.receive.controller.ReceiveGridController',
        'kalix.roffice.receive.store.ReceiveStore',
    ],
    alias: 'widget.receiveGrid',
    xtype: 'receiveGridPanel',
    controller: {
        type: 'receiveGridController',
        storeId: 'receiveStore',
        cfgForm: 'kalix.roffice.receive.view.ReceiveWindow',
        cfgViewForm: 'kalix.roffice.receive.view.ReceiveViewWindow',
        cfgModel: 'kalix.roffice.receive.model.ReceiveModel'
    },
    store: {
        type: 'receiveStore'
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
                flex: 1
            }, {
                text: '回款日期',
                dataIndex: 'receiveDate',
                flex: 1,
                xtype: 'datecolumn',
                //format: 'Y-m-d'
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd");
                }
            }, {
                text: '回款金额',
                dataIndex: 'money',
                flex: 1,
                renderer: 'renderMoney'
            }, /*{
             text: '合同id',
             dataIndex: 'contractId',
             flex: 1
             },*/
            {
                text: '备注',
                dataIndex: 'comment',
                flex: 3
            },
            {
                text: '最后修改人',
                dataIndex: 'updateBy',
                flex: 1
            },
            {
                text: '最后修改时间',
                dataIndex: 'updateDate',
                flex: 2,
                xtype: 'datecolumn',
                formatter: 'date("Y-m-d H:i:s")'
            },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:deployModule:receiveMenu:view',
                    'roffice:deployModule:receiveMenu:edit',
                    'roffice:deployModule:receiveMenu:delete'
                ]
            }]
    },

    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:deployModule:receiveMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
