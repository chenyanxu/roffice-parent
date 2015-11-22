package cn.com.rexen.roffice.core.web.app;

/**
 * Created by sunlf on 2015/11/2.
 * roffice 系统常量定义类
 */
public class Const {
    public static final String APPLICATION_NAME = "roffice";
    public static final String APPLICATION_ALIAS = "协同办公";

    //#################################################################################
    // 合同管理模块常量
    public static final String CM_MODULE_ID = "cmModule";
    public static final String CM_MODULE_TEXT = "合同管理";
    public static final String CM_MODULE_ROUTE_ID = "pages-parent";
    public static final int CM_MODULE_INDEX = 5;
    public static final String CM_MODULE_ICON_CLASS = "right-icon x-fa fa-folder";
    public static final String CM_MODULE_PERMISSION = APPLICATION_NAME + ":" + CM_MODULE_ID;

    //项目合同菜单常量
    public static final String CONTRACT_MENU_ID = "contractMenu";
    public static final String CONTRACT_MENU_TEXT = "项目合同";
    public static final String CONTRACT_MENU_ROUTE_ID = "roffice/Contract";
    public static final int CONTRACT_MENU_INDEX = 0;
    public static final String CONTRACT_MENU_ICON_CLASS = "x-fa fa-file-text";
    public static final String CONTRACT_MENU_PERMISSION = CM_MODULE_PERMISSION + ":" + CONTRACT_MENU_ID;

    //合同清单菜单常量
    public static final String CONTRACT_DETAIL_MENU_ID = "contractDetailMenu";
    public static final String CONTRACT_DETAIL_MENU_TEXT = "合同清单";
    public static final String CONTRACT_DETAIL_MENU_ROUTE_ID = "roffice/ContractDetail";
    public static final int CONTRACT_DETAIL_MENU_INDEX = 10;
    public static final String CONTRACT_DETAIL_MENU_ICON_CLASS = "x-fa fa-calendar  ";
    public static final String CONTRACT_DETAIL_MENU_PERMISSION = CM_MODULE_PERMISSION + ":" + CONTRACT_DETAIL_MENU_ID;

    //合同发票菜单常量
    public static final String INVOICE_MENU_ID = "contractMenu";
    public static final String INVOICE_MENU_TEXT = "合同发票";
    public static final String INVOICE_MENU_ROUTE_ID = "roffice/Invoice";
    public static final int INVOICE_MENU_INDEX = 20;
    public static final String INVOICE_MENU_ICON_CLASS = "x-fa fa-credit-card";
    public static final String INVOICE_MENU_PERMISSION = CM_MODULE_PERMISSION + ":" + INVOICE_MENU_ID;

    //#################################################################################
    // 通用模块常量
    public static final String COMMONS_MODULE_ID = "commonsModule";
    public static final String COMMONS_MODULE_TEXT = "通用功能";
    public static final String COMMONS_MODULE_ROUTE_ID = "pages-parent";
    public static final int COMMONS_MODULE_INDEX = 0;
    public static final String COMMONS_MODULE_ICON_CLASS = "right-icon x-fa fa-tag";
    public static final String COMMONS_MODULE_PERMISSION = APPLICATION_NAME + ":" + COMMONS_MODULE_ID;

    //公司新闻菜单常量
    public static final String NEWS_MENU_ID = "newsMenu";
    public static final String NEWS_MENU_TEXT = "公司新闻";
    public static final String NEWS_MENU_ROUTE_ID = "roffice/News";
    public static final int NEWS_MENU_INDEX = 0;
    public static final String NEWS_MENU_ICON_CLASS = "x-fa fa-newspaper-o";
    public static final String NEWS_MENU_PERMISSION = COMMONS_MODULE_PERMISSION + ":" + NEWS_MENU_ID;

    //公司公告菜单常量
    public static final String NOTE_MENU_ID = "noteMenu";
    public static final String NOTE_MENU_TEXT = "公司公告";
    public static final String NOTE_MENU_ROUTE_ID = "roffice/Note";
    public static final int NOTE_MENU_INDEX = 10;
    public static final String NOTE_MENU_ICON_CLASS = "x-fa fa-comment";
    public static final String NOTE_MENU_PERMISSION = COMMONS_MODULE_PERMISSION + ":" + NOTE_MENU_ID;

    //#################################################################################

    //售前模块常量
    public static final String SALE_MODULE_ID = "saleModule";
    public static final String SALE_MODULE_TEXT = "售前服务";
    public static final String SALE_MODULE_ROUTE_ID = "pages-parent";
    public static final int SALE_MODULE_INDEX = 10;
    public static final String SALE_MODULE_ICON_CLASS = "right-icon x-fa fa-coffee";
    public static final String SALE_MODULE_PERMISSION = APPLICATION_NAME + ":" + SALE_MODULE_ID;

    //出差记录菜单常量
    public static final String TRAVEL_MENU_ID = "travelMenu";
    public static final String TRAVEL_MENU_TEXT = "出差记录";
    public static final String TRAVEL_MENU_ROUTE_ID = "roffice/Travel";
    public static final String TRAVEL_MENU_ICON_CLASS = "x-fa fa-car";
    public static final String TRAVEL_MENU_PERMISSION = SALE_MODULE_PERMISSION + ":" + TRAVEL_MENU_ID;
    public static final int TRAVEL_MENU_INDEX = 0;

    //项目支持菜单常量
    public static final String SUPPORT_MENU_ID = "supportMenu";
    public static final String SUPPORT_MENU_TEXT = "项目支持";
    public static final String SUPPORT_MENU_ROUTE_ID = "roffice/Support";
    public static final String SUPPORT_MENU_ICON_CLASS = "x-fa fa-support";
    public static final String SUPPORT_MENU_PERMISSION = SALE_MODULE_PERMISSION + ":" + SUPPORT_MENU_ID;
    public static final int SUPPORT_MENU_INDEX = 20;

    //项目机会菜单常量
    public static final String CHANCE_MENU_ID = "chanceMenu";
    public static final String CHANCE_MENU_TEXT = "项目机会";
    public static final String CHANCE_MENU_ROUTE_ID = "roffice/Chance";
    public static final String CHANCE_MENU_ICON_CLASS = "x-fa fa-cutlery";
    public static final String CHANCE_MENU_PERMISSION = SALE_MODULE_PERMISSION + ":" + CHANCE_MENU_ID;
    public static final int CHANCE_MENU_INDEX = 10;

    //实施项目菜单常量
    public static final String DEPLOY_MENU_ID = "deployMenu";
    public static final String DEPLOY_MENU_TEXT = "实施项目";
    public static final String DEPLOY_MENU_ROUTE_ID = "roffice/Deploy";
    public static final String DEPLOY_MENU_ICON_CLASS = "x-fa fa-indent";
    public static final String DEPLOY_MENU_PERMISSION = SALE_MODULE_PERMISSION + ":" + DEPLOY_MENU_ID;
    public static final int DEPLOY_MENU_INDEX = 30;

    //项目管理菜单常量
    public static final String PROJECT_MENU_ID = "projectMenu";
    public static final String PROJECT_MENU_TEXT = "项目管理";
    public static final String PROJECT_MENU_ROUTE_ID = "roffice/Project";
    public static final String PROJECT_MENU_ICON_CLASS = "x-fa fa-table";
    public static final String PROJECT_MENU_PERMISSION = SALE_MODULE_PERMISSION + ":" + PROJECT_MENU_ID;
    public static final int PROJECT_MENU_INDEX = 60;

    //#################################################################################

    //交付模块常量
    public static final String DEPLOY_MODULE_ID = "deployModule";
    public static final String DEPLOY_MODULE_TEXT = "项目交付";
    public static final String DEPLOY_MODULE_ROUTE_ID = "pages-parent";
    public static final int DEPLOY_MODULE_INDEX = 20;
    public static final String DEPLOY_MODULE_ICON_CLASS = "right-icon x-fa fa-th";
    public static final String DEPLOY_MODULE_PERMISSION = APPLICATION_NAME + ":" + DEPLOY_MODULE_ID;

    //项目回款菜单常量
    public static final String RECEIVE_MENU_ID = "receiveMenu";
    public static final String RECEIVE_MENU_TEXT = "项目回款";
    public static final String RECEIVE_MENU_ROUTE_ID = "roffice/Receive";
    public static final String RECEIVE_MENU_ICON_CLASS = "x-fa fa-repeat";
    public static final String RECEIVE_MENU_PERMISSION = DEPLOY_MODULE_PERMISSION + ":" + RECEIVE_MENU_ID;
    public static final int RECEIVE_MENU_INDEX = 20;

    //采购设备付款菜单常量
    public static final String PAY_MENU_ID = "payMenu";
    public static final String PAY_MENU_TEXT = "采购付款";
    public static final String PAY_MENU_ROUTE_ID = "roffice/Pay";
    public static final String PAY_MENU_ICON_CLASS = "x-fa fa-cc-visa";
    public static final String PAY_MENU_PERMISSION = DEPLOY_MODULE_PERMISSION + ":" + PAY_MENU_ID;
    public static final int PAY_MENU_INDEX = 30;

    //设备发票菜单常量
    public static final String PURCHASE_INVOICE_MENU_ID = "purchaseInvoiceMenu";
    public static final String PURCHASE_INVOICE_MENU_TEXT = "设备发票";
    public static final String PURCHASE_INVOICE_MENU_ROUTE_ID = "roffice/purchaseinvoice";
    public static final String PURCHASE_INVOICE_MENU_ICON_CLASS = "x-fa fa-copy";
    public static final String PURCHASE_INVOICE_MENU_PERMISSION = DEPLOY_MODULE_PERMISSION + ":" + PURCHASE_INVOICE_MENU_ID;
    public static final int PURCHASE_INVOICE_MENU_INDEX = 30;

}
