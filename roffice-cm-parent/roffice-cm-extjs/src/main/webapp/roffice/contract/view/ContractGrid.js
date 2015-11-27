/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.view.ContractGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.contract.controller.ContractGridController',
        'kalix.roffice.contract.store.ContractStore',
        'kalix.admin.dict.component.DictGridColumn'
    ],
    alias: 'widget.contractGrid',
    xtype: 'contractGrid',
    controller: {
        type: 'contractGridController',
        storeId: 'contractStore',
        cfgForm: 'kalix.roffice.contract.view.ContractWindow',
        cfgViewForm: 'kalix.roffice.contract.view.ContractViewWindow',
        cfgModel: 'kalix.roffice.contract.model.ContractModel'
    },
    store: {
        type: 'contractStore'
    },
    columns: {
        defaults: {
            flex: 1,
            renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer:this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '客户经理',
                dataIndex: 'manager',
                flex:0.5
            },
            {
                text: '合同编号',
                dataIndex: 'contractNumber'
            },
            {
                text: '项目名称',
                dataIndex: 'projectName',

            }, {
                text: '甲方',
                dataIndex: 'partyA'
            }, {
                text: '乙方',
                dataIndex: 'partyB',
                flex:0.5
            },
            {
                text: '备注',
                dataIndex: 'remark',
                flex:0.5
            },
            /*{
                text: '合同状态',
                xtype: 'dictGridColumn',
                dictType: 'contractStatus',
                dataIndex: 'contractStatus'
            }
            ,*/
            {
                flex:0.5,
                xtype: 'securityGridColumnCommon',
                items: [
                    {
                        icon: "resources/images/read.png",
                        permission: 'roffice:cmModule:contractMenu:view',
                        tooltip: '查看',
                        handler: 'onView'
                    },
                    {
                        icon: "resources/images/edit.png",
                        permission: 'roffice:cmModule:contractMenu:edit',
                        tooltip: '编辑',
                        handler: 'onEdit'
                    }, {
                        icon: "resources/images/delete.png",
                        permission: 'roffice:cmModule:contractMenu:delete',
                        tooltip: '删除',
                        handler: 'onDelete'
                    },
                    {
                        icon: "attachment/resources/images/attachment_manage.png",
                        permission: 'roffice:cmModule:contractMenu:delete',
                        tooltip: '附件管理',
                        handler: 'onAttachmentManage'
                    }
                ]
            }
            //,
            //{
            //    xtype: 'securityGridColumnRUD',
            //    //iconPath:'/kalix/roffice/cm/resources/images/contract',
            //    permissions: [
            //        'roffice:cmModule:contractMenu:view',
            //        'roffice:cmModule:contractMenu:edit',
            //        'roffice:cmModule:contractMenu:delete'
            //    ]
            //}
        ]
    },
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
