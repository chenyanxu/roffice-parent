/**
 * 项目机会模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.viewModel.ChanceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chanceViewModel',
    data: {
        rec:null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation:false,
        view_title:'查看项目机会',
        add_title:'添加项目机会',
        edit_title:'修改项目机会',
        add_image_path: CONFIG.restRoot+'/roffice/chance/resources/images/chance_add.png',
        view_image_path: CONFIG.restRoot+'/roffice/chance/resources/images/chance_view.png',
        delete_image_path: CONFIG.restRoot+'/roffice/chance/resources/images/chance_delete.png',
        edit_image_path: CONFIG.restRoot+'/roffice/chance/resources/images/chance_edit.png',
    }
});