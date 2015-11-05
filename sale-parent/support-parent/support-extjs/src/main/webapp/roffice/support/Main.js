/**
 * 项目支持首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.support.store.SupportStore',  //用户模型集合
        'kalix.roffice.support.view.SupportGrid',
        'kalix.roffice.support.view.SupportSearchForm'
    ],
    items: [
        {
            title: '项目支持查询',
            iconCls: 'x-fa fa-search',
            xtype: 'supportSearchForm'
        }, {
            xtype: 'supportGridPanel',
            id: 'supportGridPanel',
            title: '项目支持列表',
            iconCls: 'x-fa fa-support',
            margin: 10,
            store: {
                type: 'supportStore'
            }
        }
    ]
});
