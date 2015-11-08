package cn.com.rexen.roffice.note.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class NoteMenuImpl implements IMenu {
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
        return Const.NOTE_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.NOTE_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return "admin/resources/images/building.png";
    }

    @Override
    public int getIndex() {
        return Const.NOTE_MENU_INDEX;
    }

    @Override
    public String getIconCls() {
        return Const.NOTE_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.NOTE_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.NOTE_MENU_ROUTE_ID;
    }

    @Override
    public String getPermission() {
        return Const.NOTE_MENU_PERMISSION;
    }

}
