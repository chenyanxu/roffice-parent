package cn.com.rexen.roffice.travel.entities;

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
@Table(name = "roffice_travel")
public class TravelBean extends PersistentEntity {
    private String name;//任务名称
    private String person;//出差人员
    private String target;//任务目标
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date startDate;//出发时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date endDate;//回程时间
    private String resultPerson;//结果评定人
    private String result;//完成情况
    private String comment;//备注

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        if (endDate != null) {
            this.endDate = new Date(endDate.getTime());
        } else {
            this.endDate = null;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPerson() {
        return person;
    }

    public void setPerson(String person) {
        this.person = person;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getResultPerson() {
        return resultPerson;
    }

    public void setResultPerson(String resultPerson) {
        this.resultPerson = resultPerson;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        if (startDate != null) {
            this.startDate = new Date(startDate.getTime());
        } else {
            this.startDate = null;
        }
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }
}
