package cn.com.rexen.roffice.cm.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;

/**
 * Created by GISCYX on 2015/11/15.
 */
public class ContractDetailDto extends QueryDTO {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
