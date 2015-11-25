/**
 * 实施项目首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.deploy.view.DeployGrid',
        'kalix.roffice.deploy.view.DeploySearchForm',
        'kalix.roffice.deploy.viewModel.DeployViewModel'
    ],
    storeId: 'deployStore',
    viewModel: 'deployViewModel',
    items: [
        {
            title: '实施项目查询',
            iconCls: 'x-fa fa-search',
            xtype: 'deploySearchForm'
        }, {
            xtype: 'deployGridPanel',
            id: 'deployGridPanel',
            title: '实施项目列表',
            iconCls: 'x-fa fa-indent',
            margin: 10
        }
    ]
});
