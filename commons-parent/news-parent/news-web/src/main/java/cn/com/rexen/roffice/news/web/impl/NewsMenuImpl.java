package cn.com.rexen.roffice.news.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class NewsMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return Const.COMMONS_MODULE_ID;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return Const.NEWS_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.NEWS_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return "admin/resources/images/building.png";
    }

    @Override
    public int getIndex() {
        return Const.NEWS_MENU_INDEX;
    }


    @Override
    public String getIconCls() {
        return Const.NEWS_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.NEWS_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.NEWS_MENU_ROUTE_ID;
    }

    @Override
    public String getPermission() {
        return Const.NEWS_MENU_PERMISSION;
    }

}
