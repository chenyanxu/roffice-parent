package cn.com.rexen.roffice.cm.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;

import javax.persistence.*;
import java.util.Date;


/**Contract Entity
 * @author ：Chenyanxu
 */
@Entity
@Table(name = "cm_contract")
@Inheritance(strategy = InheritanceType.JOINED)
public class ContractBean extends PersistentEntity {
    /**
     * 合同编号.
     */
    @Column(name = "constractNumber", length = 100)
    private String constractNumber;
    /**
     * 签单日期.
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "constractDate")
    private Date constractDate;

    /**
     * 甲方.
     */
    @Column(name = "partyA", length = 255)
    private String partyA;

    /**
     * 乙方.
     */
    @Column(name = "partyB", length = 100)
    private String partyB;

    /**
     * 项目名称.
     */
    @Column(name = "projectName", length = 100)
    private String projectName;

    /**
     * 合同金额.
     */
    @Column(name = "summoney", length = 10)
    private Float summoney;


    /**
     * 合同毛利.
     */
    @Column(name = "grossProfit", length = 10)
    private Float grossProfit;


    /**
     * 合同利润率.
     */
    @Column(name = "grossProfitRate", length = 10)
    private Float grossProfitRate;

    /**
     * 已收回款项.
     */
    @Column(name = "receiveMoney", length = 10)
    private Float receiveMoney;

    /**
     * 应收款项.
     */
    @Column(name = "receivables", length = 10)
    private Float receivables;


    /**
     * 预计采购成本.
     */
    @Column(name = "expectedCost", length = 10)
    private Float expectedCost;


    /**
     * 项目类型:软件、系统集成、服务.
     */
    @Column(name = "projectType", length = 20)
    private String projectType;
    /**
     * 质保期(年).
     */
    @Column(name = "guarantee", length = 80)
    private String guarantee;

    /**
     * 过期日期.
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "expireDate")
    private Date expireDate;

    /**
     * 项目实施状态.已验收、正在实施、未实施、已完结
     */
    @Column(name = "projectStatus", length = 10)
    private String projectStatus;

    /**
     * 项目经理.
     */
    private long  managerId;


    /**
     * 销售负责人
     */
    private long sellerId;

    /**
     * 备注.
     */
    @Column(name = "remark")
    private String remark;

    /**
     * 合同状态(0:草稿 1:进行中 2:完成 ).
     */
    @Column(name = "contractStatus", length = 10)
    private Integer contractStatus = 1;

    /**
     * 操作人.
     */
    private long userId;

    /**
     * 录入时间(系统时间).
     */
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "createdate")
    private Date createdate;

    /**
     * 合同是否归档.
     */
    @Column(name = "archive")
    private Boolean archive = false;

    /**
     * 合同归档日期.
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "archive_date")
    private Date archive_date;

    public String getConstractNumber() {
        return constractNumber;
    }

    public void setConstractNumber(String constractNumber) {
        this.constractNumber = constractNumber;
    }

    public Date getConstractDate() {
        return constractDate;
    }

    public void setConstractDate(Date constractDate) {
        this.constractDate = constractDate;
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

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
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

    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
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

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
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

    public long getManagerId() {
        return managerId;
    }

    public void setManagerId(long managerId) {
        this.managerId = managerId;
    }

    public long getSellerId() {
        return sellerId;
    }

    public void setSellerId(long sellerId) {
        this.sellerId = sellerId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
