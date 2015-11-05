package cn.com.rexen.roffice.chance.web.impl.module;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.core.api.web.IModule;
import cn.com.rexen.roffice.chance.web.impl.SaleConst;
import cn.com.rexen.roffice.core.web.app.Const;

import java.util.List;

/**
 * Created by sunlf on 2015/11/2.
 */
public class ChanceModuleImpl implements IModule {
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
        return SaleConst.MODULE_NAME;
    }

    @Override
    public String getText() {
        return "售前服务";
    }

    @Override
    public String getDescription() {
        return "售前服务";
    }

    @Override
    public String getIcon() {
        return "resources/images/computer.png";
    }

    @Override
    public String getRouteId() {
        return "pages-parent";
    }

    @Override
    public int getIndex() {
        return 20;
    }

    @Override
    public String getIconCls() {
        return "right-icon x-fa fa-coffee";
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
        return "";
    }
}
