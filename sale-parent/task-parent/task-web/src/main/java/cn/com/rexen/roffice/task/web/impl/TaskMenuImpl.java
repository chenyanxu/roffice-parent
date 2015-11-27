package cn.com.rexen.roffice.task.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class TaskMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return Const.CM_MODULE_ID;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return Const.TASK_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.TASK_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return null;
    }

    @Override
    public int getIndex() {
        return Const.TASK_MENU_INDEX;
    }


    @Override
    public String getIconCls() {
        return Const.TASK_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.TASK_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.TASK_MENU_ROUTE_ID;
    }

    @Override
    public String getPermission() {
        return Const.TASK_MENU_PERMISSION;
    }

}
