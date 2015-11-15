package cn.com.rexen.roffice.cm.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/** 合同清单
 * @author chenyanxu
 */
@Entity
@Table(name = "roffice_contract_detail")
@DynamicInsert
@DynamicUpdate
public class ContractDetailBean extends PersistentEntity {
    /**
     * 设备名称
     */
    private String name;
    /**
     * 供应航
     */
    private String provider;
    /**
     * 品牌
     */
    private String brand;
    /**
     * 型号
     */
    private String type;
    /**
     * 单价
     */
    private float price;
    /**
     * 数量
     */
    private int amount;
    /**
     * 计量单位
     */
    private String unit;
    /**
     * 追加设备
     */
    private boolean additional;
    /**
     * 设备追加日期
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone ="GMT+8")
    private Date addDate;
    /**
     * 合同ID
     */
    private Integer contractId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public boolean isAdditional() {
        return additional;
    }

    public void setAdditional(boolean additional) {
        this.additional = additional;
    }

    public Date getAddDate() {
        return addDate;
    }

    public void setAddDate(Date addDate) {
        this.addDate = addDate;
    }

    public Integer getContractId() {
        return contractId;
    }

    public void setContractId(Integer contractId) {
        this.contractId = contractId;
    }
}
