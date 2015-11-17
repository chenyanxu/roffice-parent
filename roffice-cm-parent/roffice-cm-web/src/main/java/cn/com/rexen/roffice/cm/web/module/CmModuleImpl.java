package cn.com.rexen.roffice.cm.web.module;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.core.api.web.IModule;
import cn.com.rexen.roffice.core.web.app.Const;

import java.util.List;

/**
 * Contract Management Module
 *
 * @author chenyanxu
 */
public class CmModuleImpl implements IModule {
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
        return Const.CM_MODULE_ID;
    }

    @Override
    public String getText() {
        return Const.CM_MODULE_TEXT;
    }

    @Override
    public String getDescription() {
        return Const.CM_MODULE_TEXT;
    }

    @Override
    public String getIcon() {
        return "resources/images/computer.png";
    }

    @Override
    public String getRouteId() {
        return Const.CM_MODULE_ROUTE_ID;
    }

    @Override
    public int getIndex() {
        return Const.CM_MODULE_INDEX;
    }

    @Override
    public String getIconCls() {
        return Const.CM_MODULE_ICON_CLASS;
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
        return Const.CM_MODULE_PERMISSION;
    }
}
