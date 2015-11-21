/**
 * 项目管理表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.view.ProjectGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.project.controller.ProjectGridController',
        'kalix.roffice.project.store.ProjectStore',
        'kalix.roffice.chance.store.ChanceStore',
        'kalix.admin.dict.component.DictGridColumn'
    ],
    alias: 'widget.projectGrid',
    xtype: 'projectGridPanel',
    controller: {
        type: 'projectGridController',
        storeId: 'projectStore',
        cfgForm: 'kalix.roffice.project.view.ProjectWindow',
        cfgViewForm: 'kalix.roffice.project.view.ProjectViewWindow',
        cfgModel: 'kalix.roffice.project.model.ProjectModel'
    },
    store: {
        type: 'projectStore'
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
            text: '名称',
            dataIndex: 'name',
            flex: 1
        }, {
            text: '项目经理',
            dataIndex: 'manager',
            flex: 1
        }, {
            text: '营销负责人',
            dataIndex: 'salePerson',
            flex: 1
        }, {
            text: '立项时间',
            dataIndex: 'setupDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            text: '交付负责人',
            dataIndex: 'deployPerson',
            flex: 1
        }, {
            text: '交付时间',
            dataIndex: 'deployDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            text: '实施状态',
            xtype: 'dictGridColumn',
            dictType: 'contractStatus',
            dataIndex: 'status',
            flex: 1
        }, {
            text: '项目机会',
            //xtype:'columntemplate',
            dataIndex: 'chanceName',
            flex: 1,
            /*renderer: function (chanceId) {
             var store = Ext.create('store.chanceStore');
             //console.log(store);
             store.load({'chanceId':chanceId});
             //console.log(store);
                return store.getById(chanceId).get('name');
                //return "￥"+chanceId;
             }*/
            },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:saleModule:projectMenu:view',
                    'roffice:saleModule:projectMenu:edit',
                    'roffice:saleModule:projectMenu:delete'
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
                permission: 'roffice:saleModule:projectMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }

});
