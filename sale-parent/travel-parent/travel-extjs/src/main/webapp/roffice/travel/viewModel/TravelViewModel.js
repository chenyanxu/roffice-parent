/**
 * 出差记录模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.viewModel.TravelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.travelViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看出差记录',
        add_title: '添加出差记录',
        edit_title: '修改出差记录',
        add_image_path: '/kalix/roffice/travel/resources/images/travel_add.png',
        view_image_path: '/kalix/roffice/travel/resources/images/travel_view.png',
        edit_image_path: '/kalix/roffice/travel/resources/images/travel_edit.png',
    }
});