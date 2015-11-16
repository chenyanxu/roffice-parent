package cn.com.rexen.roffice.pay.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

/**
 * Created by sunlf on 2015/11/5.
 */
public class PayDTO extends QueryDTO {
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date beginDate;//回款日期

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date endDate;//回款日期

    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}