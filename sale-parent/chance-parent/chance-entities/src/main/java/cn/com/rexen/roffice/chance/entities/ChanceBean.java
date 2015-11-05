package cn.com.rexen.roffice.chance.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 * @类描述：项目机会
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
@Entity
@Table(name = "roffice_chance")
public class ChanceBean extends PersistentEntity {
    private String name; //项目名称
    private String salerId; //营销负责人
    private String type;    //项目类型（数据字典）
    private String industry;    //所属行业（数据字典）
    private String level;    //优先级
    private String budget;    //预算额度
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date billDate;    //预计签单时间
    private String supporterId;    //售前支持负责人
    private String clientName;    //客户联系人姓名
    private String clientPhone;    //客户联系人电话
    private String description;    //项目机会描述
    private String comment;    //备注


    public Date getBillDate() {
        return billDate;
    }

    public void setBillDate(Date billDate) {
        if (billDate != null) {
            this.billDate = new Date(billDate.getTime());
        } else {
            this.billDate = null;
        }
    }

    public String getBudget() {
        return budget;
    }

    public void setBudget(String budget) {
        this.budget = budget;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSalerId() {
        return salerId;
    }

    public void setSalerId(String salerId) {
        this.salerId = salerId;
    }

    public String getSupporterId() {
        return supporterId;
    }

    public void setSupporterId(String supporterId) {
        this.supporterId = supporterId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
