package cn.com.rexen.roffice.cm.core;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.security.IShiroService;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.core.util.Assert;
import cn.com.rexen.roffice.cm.api.biz.IInvoiceBeanService;
import cn.com.rexen.roffice.cm.api.dao.IInvoiceBeanDao;
import cn.com.rexen.roffice.cm.entities.InvoiceBean;
import org.apache.commons.lang.StringUtils;

public class InvoiceBeanServiceImpl extends GenericBizServiceImpl<IInvoiceBeanDao, InvoiceBean> implements IInvoiceBeanService {
    private IShiroService shiroService;

    public InvoiceBeanServiceImpl() {
        super.init(InvoiceBean.class.getName());
    }

    @Override
    public void beforeSaveEntity(InvoiceBean entity, JsonStatus status) {
        String userName = shiroService.getCurrentUserName();
        Assert.notNull(userName, "用户名不能为空.");
        if (StringUtils.isNotEmpty(userName)) {
            entity.setCreateBy(userName);
            entity.setUpdateBy(userName);
        }
    }

    public void setShiroService(IShiroService shiroService) {
        this.shiroService = shiroService;
    }
}
