package cn.com.rexen.roffice.contactreport.web.impl.module;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.core.api.web.IModule;
import cn.com.rexen.roffice.core.web.app.Const;

import java.util.List;

/**
 * Created by sunlf on 2015/11/2.
 */
public class ReportModuleImpl implements IModule {
    @Override
    public List<IMenu> getMenus() {
        return null;
    }

    @Override
    public String getApplicationId() {
        return Const.APPLICATION_NAME;
    }

    @Override
    public String getId() {
        return Const.REPORT_MODULE_ID;
    }

    @Override
    public String getText() {
        return Const.REPORT_MODULE_TEXT;
    }

    @Override
    public String getDescription() {
        return Const.REPORT_MODULE_TEXT;
    }

    @Override
    public String getIcon() {
        return "resources/images/computer.png";
    }

    @Override
    public String getRouteId() {
        return Const.REPORT_MODULE_ROUTE_ID;
    }

    @Override
    public int getIndex() {
        return Const.REPORT_MODULE_INDEX;
    }

    @Override
    public String getIconCls() {
        return Const.REPORT_MODULE_ICON_CLASS;
    }

    @Override
    public boolean isExpanded() {
        return false;
    }

    @Override
    public boolean isSelectable() {
        return false;
    }

    @Override
    public String getPermission() {
        return Const.REPORT_MODULE_PERMISSION;
    }
}
