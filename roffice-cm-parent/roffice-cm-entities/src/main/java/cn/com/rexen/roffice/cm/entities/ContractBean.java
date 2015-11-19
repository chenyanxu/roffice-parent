package cn.com.rexen.roffice.cm.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;


/**Contract Entity
 * @author ：Chenyanxu
 */
@Entity
@Table(name = "roffice_contract")
public class ContractBean extends PersistentEntity {
    /**
     * 合同编号.
     */
    private String contractNumber;
    /**
     * 项目id.
     */
    private String projectId;
    /**
     * 项目名称.
     */
    private String projectName;
    /**
     * 甲方.
     */
    private String partyA;
    /**
     * 乙方.
     */
    private String partyB;
    /**
     * 合同金额.
     */
    private Float summoney;
    /**
     * 合同毛利.
     */
    private Float grossProfit;
    /**
     * 合同利润率.
     */
    private Float grossProfitRate;
    /**
     * 已收回款项.
     */
    private Float receiveMoney;
    /**
     * 应收款项.
     */
    private Float receivables;
    /**
     * 预计采购成本.
     */
    private Float expectedCost;
    /**
     * 质保期(年).
     */
    private String guarantee;
    /**
     * 合同状态(0:草稿 1:进行中 2:完成 ).
     */
    private Integer contractStatus = 1;
    /**
     * 合同是否归档.
     */
    private Boolean archive = false;
    /**
     * 合同归档日期.
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone ="GMT+8")
    private Date archive_date;
    /**
     * 过期日期.
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone ="GMT+8")
    private Date expireDate;
    /**
     * 签单日期.
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone ="GMT+8")
    private Date contractDate;
    /**
     * 备注.
     */
    private String remark;

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getContractNumber() {
        return contractNumber;
    }

    public void setContractNumber(String contractNumber) {
        this.contractNumber = contractNumber;
    }

    public Date getContractDate() {
        return contractDate;
    }

    public void setContractDate(Date contractDate) {
        this.contractDate = contractDate;
    }

    public String getPartyA() {
        return partyA;
    }

    public void setPartyA(String partyA) {
        this.partyA = partyA;
    }

    public String getPartyB() {
        return partyB;
    }

    public void setPartyB(String partyB) {
        this.partyB = partyB;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public Float getSummoney() {
        return summoney;
    }

    public void setSummoney(Float summoney) {
        this.summoney = summoney;
    }

    public Float getGrossProfit() {
        return grossProfit;
    }

    public void setGrossProfit(Float grossProfit) {
        this.grossProfit = grossProfit;
    }

    public Float getGrossProfitRate() {
        return grossProfitRate;
    }

    public void setGrossProfitRate(Float grossProfitRate) {
        this.grossProfitRate = grossProfitRate;
    }

    public Float getReceiveMoney() {
        return receiveMoney;
    }

    public void setReceiveMoney(Float receiveMoney) {
        this.receiveMoney = receiveMoney;
    }

    public Float getReceivables() {
        return receivables;
    }

    public void setReceivables(Float receivables) {
        this.receivables = receivables;
    }

    public Float getExpectedCost() {
        return expectedCost;
    }

    public void setExpectedCost(Float expectedCost) {
        this.expectedCost = expectedCost;
    }

    public String getGuarantee() {
        return guarantee;
    }

    public void setGuarantee(String guarantee) {
        this.guarantee = guarantee;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getContractStatus() {
        return contractStatus;
    }

    public void setContractStatus(Integer contractStatus) {
        this.contractStatus = contractStatus;
    }

    public Boolean getArchive() {
        return archive;
    }

    public void setArchive(Boolean archive) {
        this.archive = archive;
    }

    public Date getArchive_date() {
        return archive_date;
    }

    public void setArchive_date(Date archive_date) {
        this.archive_date = archive_date;
    }
}
