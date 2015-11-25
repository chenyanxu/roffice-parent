/**
 * 合同报表新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contactreport.view.ContactReportWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.contactreport.viewModel.ContactReportViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.contactreportWindow',
    viewModel: 'contactreportViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'contactreportStore'
    },
    xtype: "contactreportWindow",
    width: 400,
    //todo 在此修改表单
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '名称',
            allowBlank: false,
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        },
        {
            fieldLabel: '标题',
            allowBlank: false,
            bind: {
                activeError: '{validation.title}',
                value: '{rec.title}'
            }
        }, {
            fieldLabel: '内容',
            allowBlank: false,
            xtype: 'textarea',
            bind: {
                activeError: '{validation.content}',
                value: '{rec.content}'
            }
        },{
            fieldLabel: '发布时间',
            allowBlank: false,
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: {
                value: '{rec.publishDate}'
            }
            }]
    }]
});