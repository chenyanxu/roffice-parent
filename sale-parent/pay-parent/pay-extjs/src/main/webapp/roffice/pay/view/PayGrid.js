/**
 * 采购付款表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.view.PayGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.pay.controller.PayGridController',
        'kalix.roffice.pay.store.PayStore',
    ],
    alias: 'widget.payGrid',
    xtype: 'payGridPanel',
    controller: {
        type: 'payGridController',
        storeId: 'payStore',
        cfgForm: 'kalix.roffice.pay.view.PayWindow',
        cfgViewForm: 'kalix.roffice.pay.view.PayViewWindow',
        cfgModel: 'kalix.roffice.pay.model.PayModel'
    },
    store: {
        type: 'payStore'
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
            text: '采购编号',
            dataIndex: 'purchaseId',
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
            format: 'Y-m-d H:i:s'
        },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:deployModule:payMenu:view',
                    'roffice:deployModule:payMenu:edit',
                    'roffice:deployModule:payMenu:delete'
                ]
            }]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:deployModule:payMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
                }
        ]
        }

});
