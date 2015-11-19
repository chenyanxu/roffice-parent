/**
 * 出差记录首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.travel.view.TravelGrid',
        'kalix.roffice.travel.view.TravelSearchForm',
        'kalix.roffice.travel.viewModel.TravelViewModel'
    ],
    storeId: 'travelStore',
    viewModel: 'travelViewModel',
    items: [
        {
            title: '出差记录查询',
            iconCls: 'x-fa fa-search',
            xtype: 'travelSearchForm'
        }, {
            xtype: 'travelGridPanel',
            id: 'travelGridPanel',
            title: '出差记录列表',
            iconCls: 'x-fa fa-car',
            margin: 10
        }
    ]
});
