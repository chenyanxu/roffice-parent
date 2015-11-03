/**
 * 用户视图模型
 *
 * @author majian
 *         date:2015-7-6
 * @version 1.0.0
 */
Ext.define('Kalix.chance.viewModel.ChanceViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Kalix.chance.store.ChanceStore',
        'Kalix.chance.model.ChanceModel'
    ],
    alias: 'viewmodel.chanceViewModel',
    data: {
        addTitle: '新增公告',
        editTitle: '编辑公告',
        url: '/kalix/camel/rest/chances',
    },
    /*formulas: {
     dirty: {
     bind: {
     bindTo: "{currentChance}",
     deep: true
     },
     get: function(data) {
     console.log(data);
     return data ? data.dirty : false;
     }
     },
     storeDirty: {
     bind: {
     bindTo: "{currentChance}",
     deep: true
     },
     get: function() {
     return this.getStore("chances").isDirty();
     }
     }
     },*/
    /*stores: {
     chances: {
     type: 'chanceStore'
     }
     }*/
});