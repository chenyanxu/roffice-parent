package cn.com.rexen.roffice.cm.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;

import java.util.Map;

/**
 * @author chenyanxu
 */
public class BaseQueryDTO extends QueryDTO {
    private Map<String,String> jsonMap;

    public Map<String, String> getJsonMap() {
        return jsonMap;
    }

    public void setJsonMap(Map<String, String> jsonMap) {
        this.jsonMap = jsonMap;
    }
}
