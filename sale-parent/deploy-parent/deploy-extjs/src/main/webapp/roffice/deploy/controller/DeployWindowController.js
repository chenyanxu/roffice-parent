/**
 * 实施项目添加和修改表单控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.controller.DeployWindowController', {
    extend: 'kalix.controller.BaseWindowController',
    alias: 'controller.deployWindowController',

    onchange: function (cmp, newValue, oldValue) {
        if (oldValue) {
            var store = cmp.getStore()
            var projectRec = store.getAt(store.find('id', newValue));
            var deployRec = this.getViewModel().get('rec');
            deployRec.set('no', projectRec.get('no'));
            deployRec.set('name', projectRec.get('name'));
        }
    }
});
