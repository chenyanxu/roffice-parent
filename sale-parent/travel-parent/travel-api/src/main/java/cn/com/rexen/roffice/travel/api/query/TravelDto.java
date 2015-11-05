package cn.com.rexen.roffice.travel.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;

/**
 * Created by sunlf on 2015/11/5.
 * 出差记录查询DTO
 */
public class TravelDto extends QueryDTO {
    private String name; //名称

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
