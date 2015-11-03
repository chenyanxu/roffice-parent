/**
 * 用户表单控制器
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.controller.NewsFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newsFormController',
    requires: ['kalix.core.Notify'],
    /**
     * 重置操作.
     *
     */
    onReset: function () {
        var viewModel = this.getViewModel();
        var model = viewModel.get('rec');

        var modified = _.reduce(_.keys(model.getChanges()), function (memo, item) {
            memo[item] = model.getModified(item);
            return memo;
        }, {});
        model.set(modified);
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
            //使用 request 进行异步提交时与直接使用 form 组件进行异步提交有所不同
            //对服务端返回的数据与相应码有不同的要求
            //form 组件对于非 200 响应码和 200 响应码但 success 为 false，都判断为 failure
            //request 方法只要是 200 响应码都认为是 success
            //request 的处理方式更遵循 http 协议
            //这需要服务端根据不同的请求方式分别对待
            //同时如果客户端更改了提交方式，服务端也要更改相关的 api
            //艹艹艹艹
            //todo 所有的异步提交都改为采用 request 方式进行提交
            model.modified = model.data;
            model.save({
                failure: function (record, operation) {
                    Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
                },
                success: function (record, operation) {
                    view.close();
                    kalix.getApplication().getStore('newsStore').reload();
                    kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
                },
                callback: function (record, operation, success) {
                }
            });
            //Ext.Ajax.request({
            //    url: viewModel.get('url'),
            //    method: 'POST',
            //    params: model.toServerJSON(),
            //    defaultPostHeader: 'application/json',
            //    success: function (response, opts) {
            //        var res = Ext.JSON.decode(response.responseText);
            //        if (res.success) {
            //            view.close();
            //            kalix.getApplication().getStore('newsStore').reload();
            //            kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
            //        } else {
            //            Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
            //        }
            //    },
            //    failure: function (response, opts) {
            //        Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
            //    }
            //});
        } else {
            viewModel.set('validation', _.pick(model.getValidation().data, function (value, key, object) {
                return value !== true;
            }));
        }
    },
});
