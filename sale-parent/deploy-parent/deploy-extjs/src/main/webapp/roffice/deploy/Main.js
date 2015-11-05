/**
 * 实施项目首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.deploy.store.DeployStore',  //用户模型集合
        'kalix.roffice.deploy.view.DeployGrid',
        'kalix.roffice.deploy.view.DeploySearchForm'
    ],
    items: [
        {
            title: '实施项目查询',
            iconCls: 'x-fa fa-search',
            xtype: 'deploySearchForm'
        }, {
            xtype: 'deployGridPanel',
            id: 'deployGridPanel',
            title: '实施项目列表',
            iconCls: 'x-fa fa-search',
            margin: 10,
            store: {
                type: 'deployStore'
            }
        }
    ]
});
