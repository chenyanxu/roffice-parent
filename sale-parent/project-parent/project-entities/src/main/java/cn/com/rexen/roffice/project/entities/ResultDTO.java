package cn.com.rexen.roffice.project.entities;

import cn.com.rexen.core.api.web.model.BaseDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by sunlf on 2015/11/11.
 * 组合查询返回结果类
 */

public class ResultDTO extends BaseDTO implements Serializable {
    private String no;//项目编号
    private String salePerson; //    营销负责人
    private String industry; //    所属行业
    private String name;//项目名称

    private String budget;    //预算额度
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date setupDate;//    立项时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date deployDate;//    交付时间
    private String deployPerson; //    交付负责人
    private String client; //    客户负责人
    private String clientPhone; //    客户电话
    private String description; //    项目描述
    private String comment; //    备注
    private long chanceId; //    项目机会
    private long contractId;// 合同id
    private String manager; //    项目经理
    private String level; //    优先级
    private String status; //    项目实施状态
    //join name
    private String chanceName;
    private String contractName;
    private long version_;

    public ResultDTO() {
    }


    public String getBudget() {
        return budget;
    }

    public void setBudget(String budget) {
        this.budget = budget;
    }

    public long getChanceId() {
        return chanceId;
    }

    public void setChanceId(long chanceId) {
        this.chanceId = chanceId;
    }

    public String getChanceName() {
        return chanceName;
    }

    public void setChanceName(String chanceName) {
        this.chanceName = chanceName;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getClientPhone() {
        return clientPhone;
    }

    public void setClientPhone(String clientPhone) {
        this.clientPhone = clientPhone;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public long getContractId() {
        return contractId;
    }

    public void setContractId(long contractId) {
        this.contractId = contractId;
    }

    public String getContractName() {
        return contractName;
    }

    public void setContractName(String contractName) {
        this.contractName = contractName;
    }

    public Date getDeployDate() {
        return deployDate;
    }

    public void setDeployDate(Date deployDate) {
        this.deployDate = deployDate;
    }

    public String getDeployPerson() {
        return deployPerson;
    }

    public void setDeployPerson(String deployPerson) {
        this.deployPerson = deployPerson;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getSalePerson() {
        return salePerson;
    }

    public void setSalePerson(String salePerson) {
        this.salePerson = salePerson;
    }

    public Date getSetupDate() {
        return setupDate;
    }

    public void setSetupDate(Date setupDate) {
        this.setupDate = setupDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public long getVersion_() {
        return version_;
    }

    public void setVersion_(long version_) {
        this.version_ = version_;
    }
}
