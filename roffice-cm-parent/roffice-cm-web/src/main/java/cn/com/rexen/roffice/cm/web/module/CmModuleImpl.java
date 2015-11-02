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
    public String getIconCls() {
        return "x-fa fa-folder";
    }

    @Override
    public String getId() {
        return "cmModule";
    }

    @Override
    public String getText() {
        return "合同管理";
    }

    @Override
    public String getDescription() {
        return "";
    }

    @Override
    public String getIcon() {
        return null;
    }

    @Override
    public String getRouteId() {
        return null;
    }

    @Override
    public int getIndex() {
        return 0;
    }

    @Override
    public String getPermission() {
        return null;
    }
}
