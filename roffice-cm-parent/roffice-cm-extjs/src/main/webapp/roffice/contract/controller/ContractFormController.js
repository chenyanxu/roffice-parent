/**
 * 用户表单控制器
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contract.controller.ContractFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contractFormController',
    requires: ['kalix.core.Notify'],
    /**
     * 重置操作.
     *
     */
    onReset: function () {
        var viewModel = this.getViewModel();
        var model = viewModel.get('rec');

        model.set(model.modified);
    },

    /**
     * 保存/更新操作.
     *
     */
    onSave: function () {
        var viewModel = this.getViewModel();
        var model = viewModel.get('rec');
        var view = this.getView();

        if (model.isValid()) {
            model.modified = model.data;
            model.save({
                failure: function (record, operation) {
                },
                success: function (record, operation) {
                    view.close();
                    kalix.getApplication().getStore('contractStore').reload();
                },
                callback: function (record, operation, success) {
                    var res = Ext.JSON.decode(operation.getResponse().responseText);

                    if (success) {
                        kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
                    }
                    else {
                        Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
                    }
                }
            });
            view.close();
        } else {
            viewModel.set('validation', _.pick(model.getValidation().data, function (value, key, object) {
                return value !== true;
            }));
        }
    }
});
