/**
 * 实施项目表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.view.DeployGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.deploy.controller.DeployGridController',
        'kalix.roffice.deploy.store.DeployStore',
    ],
    alias: 'widget.deployGrid',
    xtype: 'deployGridPanel',
    controller: {
        type: 'deployGridController',
        storeId: 'deployStore',
        cfgForm: 'kalix.roffice.deploy.view.DeployWindow',
        cfgViewForm: 'kalix.roffice.deploy.view.DeployViewWindow',
        cfgModel: 'kalix.roffice.deploy.model.DeployModel'
    },
    store: {
        type: 'deployStore'
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
            text: '项目编号',
            dataIndex: 'no',
            flex: 1
        }, {
            text: '项目名称',
            dataIndex: 'name',
            flex: 1
        }, {
            text: '交付负责人',
            dataIndex: 'deployPerson',
            flex: 1
        }, {
            text: '合同金额',
            dataIndex: 'budget',
            flex: 1,
            renderer: 'renderMoney'
        }, {
            text: '回款情况',
            dataIndex: 'receiveInfo',
            flex: 1,
        },{
            xtype: 'securityGridColumnRUD',
            permissions: [
                'roffice:deployModule:deployMenu:view',
                'roffice:deployModule:deployMenu:edit',
                'roffice:deployModule:deployMenu:delete'
            ]
        }
    ]},

    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                //todo change permission
                permission: 'roffice:deployModule:deployMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }

});
