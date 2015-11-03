/**
 * 项目机会模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.viewModel.ChanceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chanceViewModel',
    requires: [
        'kalix.roffice.chance.model.ChanceModel'
    ],
    data: {
        url: '/kalix/camel/rest/chances',
        rec: Ext.create('kalix.roffice.chance.model.ChanceModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/chance/resources/images/chance_add.png',
        view_image_path: '/kalix/roffice/chance/resources/images/chance_view.png',
        delete_image_path: '/kalix/roffice/chance/resources/images/chance_delete.png',
        edit_image_path: '/kalix/roffice/chance/resources/images/chance_edit.png',
    }
});