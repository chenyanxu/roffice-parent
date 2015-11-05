package cn.com.rexen.roffice.news.web.impl.module;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.core.api.web.IModule;
import cn.com.rexen.roffice.core.web.app.Const;
import cn.com.rexen.roffice.news.web.impl.GeneralConst;

import java.util.List;

/**
 * Created by sunlf on 2015/11/2.
 */
public class CommonsModuleImpl implements IModule {
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
        return GeneralConst.MODULE_NAME;
    }

    @Override
    public String getText() {
        return "通用功能";
    }

    @Override
    public String getDescription() {
        return "通用功能";
    }

    @Override
    public String getIcon() {
        return "resources/images/computer.png";
    }

    @Override
    public String getRouteId() {
        return null;
    }

    @Override
    public int getIndex() {
        return 20;
    }

    @Override
    public String getIconCls() {
        return "right-icon x-fa fa-tags";
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
