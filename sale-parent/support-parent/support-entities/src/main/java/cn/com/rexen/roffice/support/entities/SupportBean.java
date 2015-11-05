package cn.com.rexen.roffice.support.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

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
@Table(name = "roffice_support")
public class SupportBean extends PersistentEntity {
    private String name; //项目名称
    private String saler; //营销负责人
    private String type;    //项目类型（数据字典）
    private String industry;    //所属行业（数据字典）
    private String level;    //优先级
    private String budget;    //预算额度
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date billDate;    //预计交付时间
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date startDate;    //预计开始时间
    private String supporter;    //售前支持负责人
    private String supportPerson;    //售前支持人员
    private String subSystem; //包含子系统
    private String comment;    //备注
    private long chanceId; //项目机会id

    //    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    public Date getBillDate() {
        return billDate;
    }

    public void setBillDate(Date billDate) {
        this.billDate = billDate;
        /*if (billDate != null) {
            this.billDate = new Date(billDate.getTime());
        } else {
            this.billDate = null;
        }*/
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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
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

    public String getSaler() {
        return saler;
    }

    public void setSaler(String saler) {
        this.saler = saler;
    }

    //    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        /*if (startDate != null) {
            this.startDate = new Date(startDate.getTime());
        } else {
            this.startDate = null;
        }*/
        this.startDate = startDate;
    }

    public String getSubSystem() {
        return subSystem;
    }

    public void setSubSystem(String subSystem) {
        this.subSystem = subSystem;
    }

    public String getSupporter() {
        return supporter;
    }

    public void setSupporter(String supporter) {
        this.supporter = supporter;
    }

    public String getSupportPerson() {
        return supportPerson;
    }

    public void setSupportPerson(String supportPerson) {
        this.supportPerson = supportPerson;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
