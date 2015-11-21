/**
 * 项目支持首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.support.view.SupportGrid',
        'kalix.roffice.support.view.SupportSearchForm',
        'kalix.roffice.support.viewModel.SupportViewModel'
    ],
    storeId:'supportStore',
    viewModel:'supportViewModel',
    items: [
        {
            title: '项目支持查询',
            iconCls: 'x-fa fa-search',
            xtype: 'supportSearchForm'
        }, {
            xtype: 'supportGridPanel',
            title: '项目支持列表',
            iconCls: 'x-fa fa-support',
            margin: 10
        }
    ]
});
