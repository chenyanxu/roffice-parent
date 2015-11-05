package cn.com.rexen.roffice.news.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class NewsMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getIconCls() {
        return "x-fa fa-newspaper-o";
    }

    @Override
    public String getText() {
        return "公司新闻";
    }

    @Override
    public String getRouteId() {
        return "roffice/news";
    }

    @Override
    public String getModuleId() {
        return GeneralConst.MODULE_NAME;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return "newsMenu";
    }

    @Override
    public String getDescription() {
        return null;
    }

    @Override
    public String getIcon() {
        return "admin/resources/images/building.png";
    }

    @Override
    public int getIndex() {
        return 0;
    }

    @Override
    public String getPermission() {
        return "";
    }


}
