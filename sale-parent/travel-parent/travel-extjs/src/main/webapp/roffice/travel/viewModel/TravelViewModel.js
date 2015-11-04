/**
 * 出差记录模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.viewModel.TravelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.travelViewModel',
    requires: [
        'kalix.roffice.travel.model.TravelModel'
    ],
    data: {
        url: '/kalix/camel/rest/travels',
        rec: Ext.create('kalix.roffice.travel.model.TravelModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/travel/resources/images/travel_add.png',
        view_image_path: '/kalix/roffice/travel/resources/images/travel_view.png',
        delete_image_path: '/kalix/roffice/travel/resources/images/travel_delete.png',
        edit_image_path: '/kalix/roffice/travel/resources/images/travel_edit.png',
    }
});