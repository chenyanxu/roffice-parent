package cn.com.rexen.roffice.deploy.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
//todo 修改模型定义
@Entity
@Table(name = "roffice_deploy")
public class DeployBean extends PersistentEntity {
    private String name;//项目名称
    private String no;//项目编号
    private String status; //    项目状态

    private String deployPerson; //    交付负责人
    private String budget;    //合同金额
    private String receiveInfo;//回款情况

    private String salePerson; //    营销负责人
    private String member;//项目组成员

    private String plan; //    交付计划

    private String finishInfo; //    计划完成情况

    private String problem; //    问题与风险
    private String measure; //    风险对应措施
    private long projectId; //    项目id
    private String comment; //备注

    public String getBudget() {
        return budget;
    }

    public void setBudget(String budget) {
        this.budget = budget;
    }

    public String getDeployPerson() {
        return deployPerson;
    }

    public void setDeployPerson(String deployPerson) {
        this.deployPerson = deployPerson;
    }

    public String getFinishInfo() {
        return finishInfo;
    }

    public void setFinishInfo(String finishInfo) {
        this.finishInfo = finishInfo;
    }

    public String getMember() {
        return member;
    }

    public void setMember(String member) {
        this.member = member;
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

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public String getProblem() {
        return problem;
    }

    public void setProblem(String problem) {
        this.problem = problem;
    }

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public String getReceiveInfo() {
        return receiveInfo;
    }

    public void setReceiveInfo(String receiveInfo) {
        this.receiveInfo = receiveInfo;
    }

    public String getSalePerson() {
        return salePerson;
    }

    public void setSalePerson(String salePerson) {
        this.salePerson = salePerson;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMeasure() {
        return measure;
    }

    public void setMeasure(String measure) {
        this.measure = measure;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
