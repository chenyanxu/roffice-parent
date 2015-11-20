/**
 * 项目回款首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.receive.view.ReceiveGrid',
        'kalix.roffice.receive.view.ReceiveSearchForm',
        'kalix.roffice.receive.viewModel.ReceiveViewModel'
    ],
    storeId: 'receiveStore',
    viewModel: 'receiveViewModel',
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
            margin: 10
        }
    ]
});
