package cn.com.rexen.roffice.cm.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;

/**
 * @author chenyanxu
 */
public class InvoiceDto extends QueryDTO {
    private String invoiceNo;

    public String getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(String invoiceNo) {
        this.invoiceNo = invoiceNo;
    }
}
