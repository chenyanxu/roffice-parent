package cn.com.rexen.roffice.cm.core;

import cn.com.rexen.core.security.impl.ShiroGenericBizServiceImpl;
import cn.com.rexen.roffice.cm.api.biz.IInvoiceBeanService;
import cn.com.rexen.roffice.cm.api.dao.IInvoiceBeanDao;
import cn.com.rexen.roffice.cm.entities.InvoiceBean;

public class InvoiceBeanServiceImpl extends ShiroGenericBizServiceImpl<IInvoiceBeanDao, InvoiceBean> implements IInvoiceBeanService {
    public InvoiceBeanServiceImpl() {
        super.init(InvoiceBean.class.getName());
    }
}
