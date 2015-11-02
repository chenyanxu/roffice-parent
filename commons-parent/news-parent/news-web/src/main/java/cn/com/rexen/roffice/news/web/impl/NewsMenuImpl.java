package cn.com.rexen.roffice.news.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class NewsMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return "newsModule";
    }

    @Override
    public String getParentMenuId() {
        return "newsMenu";
    }

    @Override
    public String getId() {
        return "newsMenu";
    }

    @Override
    public String getTitle() {
        return "审计管理";
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
    public String getComponentClass() {
        return "Kalix.news.view.News";
    }

    @Override
    public int getIndex() {
        return 0;
    }

    @Override
    public String getPermission() {
        return "admin:newsModule:newsMenu:newsMenu";
    }
}
