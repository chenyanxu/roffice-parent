/**
 * 项目机会首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.chance.store.ChanceStore',  //用户模型集合
        'kalix.roffice.chance.view.ChanceGrid',
        'kalix.roffice.chance.view.ChanceSearchForm'
    ],
    items: [
        {
            title: '项目机会查询',
            iconCls: 'x-fa fa-search',
            xtype: 'chanceSearchForm'
        }, {
            xtype: 'chanceGridPanel',
            id: 'chanceGridPanel',
            title: '项目机会列表',
            iconCls: 'x-fa fa-cutlery',
            margin: 10,
            store: {
                type: 'chanceStore'
            }
        }
    ]
});
