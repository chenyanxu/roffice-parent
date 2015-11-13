package cn.com.rexen.roffice.cm.api.biz;

import cn.com.rexen.core.api.biz.IBizService;
import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.roffice.cm.entities.InvoiceBean;

/**
 * ContractBeanService Interface
 *
 * @author ：Chenyanxu
 */
public interface IInvoiceBeanService extends IBizService<InvoiceBean> {
    JsonData getAllEntityByCustomQuery(int page, int limit, String contractNumber);
}
