package cn.com.rexen.roffice.task.entities;

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
@Table(name = "roffice_task")
public class TaskBean extends PersistentEntity {
    private String name;//销售人员名称
    private String taskType;   //分类
    private float contactNo;  //合同额
    private float targetNo;  //目标毛利
    private float finishContactNo;  //完成合同额
    private float finishTargetNo;  //完成目标毛利
    private float contactPercent; //合同完成率
    private float targetPercent; //合同完成率
    private String year;  //年度

    public float getContactNo() {
        return contactNo;
    }

    public void setContactNo(float contactNo) {
        this.contactNo = contactNo;
    }

    public float getTargetNo() {
        return targetNo;
    }

    public void setTargetNo(float targetNo) {
        this.targetNo = targetNo;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public float getContactPercent() {
        return contactPercent;
    }

    public void setContactPercent(float contactPercent) {
        this.contactPercent = contactPercent;
    }

    public float getFinishContactNo() {
        return finishContactNo;
    }

    public void setFinishContactNo(float finishContactNo) {
        this.finishContactNo = finishContactNo;
    }

    public float getFinishTargetNo() {
        return finishTargetNo;
    }

    public void setFinishTargetNo(float finishTargetNo) {
        this.finishTargetNo = finishTargetNo;
    }

    public float getTargetPercent() {
        return targetPercent;
    }

    public void setTargetPercent(float targetPercent) {
        this.targetPercent = targetPercent;
    }
}
