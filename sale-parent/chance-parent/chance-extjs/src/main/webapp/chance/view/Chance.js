/**
 * 用户组件
 *
 * @author majian
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('Kalix.chance.view.Chance', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Kalix.chance.viewModel.ChanceViewModel',
        'Kalix.chance.controller.ChanceController'
    ],
    controller: 'chanceController',
    viewModel: {
        type: 'chanceViewModel'
    },
    items: [],
    initComponent: function () {
        var chanceController = this.getController("chanceController");

        this.items[0] = chanceController.onInitPanel();
        /*var grid = Ext.getCmp("chanceDataGrid");
         var store = grid.getStore();
         store.load({params:{start:0, limit:10}});
         grid.getView().refresh();*/
        this.callParent(arguments);
    }
});