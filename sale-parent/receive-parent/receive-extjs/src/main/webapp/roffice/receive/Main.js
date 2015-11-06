/**
 * 项目回款首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.receive.store.ReceiveStore',  //用户模型集合
        'kalix.roffice.receive.view.ReceiveGrid',
        'kalix.roffice.receive.view.ReceiveSearchForm'
    ],
    items: [
        {
            title: '项目回款查询',
            iconCls: 'x-fa fa-search',
            xtype: 'receiveSearchForm'
        }, {
            xtype: 'receiveGridPanel',
            id: 'receiveGridPanel',
            title: '项目回款列表',
            iconCls: 'x-fa fa-repeat',
            margin: 10,
            store: {
                type: 'receiveStore'
            }
        }
    ]
});
