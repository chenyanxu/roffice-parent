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
}
