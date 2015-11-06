package cn.com.rexen.roffice.project.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class ProjectMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return Const.SALE_MODULE_ID;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return Const.PROJECT_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.PROJECT_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return "admin/resources/images/building.png";
    }

    @Override
    public int getIndex() {
        return Const.PROJECT_MENU_INDEX;
    }

    @Override
    public String getPermission() {
        return Const.PROJECT_MENU_PERMISSION;
    }

    @Override
    public String getIconCls() {
        return Const.PROJECT_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.PROJECT_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.PROJECT_MENU_ROUTE_ID;
    }
}
