package cn.com.rexen.roffice.cm.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;


/**
 * Bill Entity
 *
 * @author ：Chenyanxu
 */
@Entity
@Table(name = "roffice_invoice")

public class InvoiceBean extends PersistentEntity {
    /**
     * 开发票日期.
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone ="GMT+8")
    private Date invoiceDate;
    /**
     * 发票金额.
     */
    private Float money;
    /**
     * 税率.
     */
    private Float rate;
    /**
     * 发票号.
     */
    private String invoiceNo;
    /**
     * 合同ID
     */
    private Integer contractId;

    public Date getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(Date invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public Float getMoney() {
        return money;
    }

    public void setMoney(Float money) {
        this.money = money;
    }

    public Float getRate() {
        return rate;
    }

    public void setRate(Float rate) {
        this.rate = rate;
    }

    public String getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(String invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public Integer getContractId() {
        return contractId;
    }

    public void setContractId(Integer contractId) {
        this.contractId = contractId;
    }
}
