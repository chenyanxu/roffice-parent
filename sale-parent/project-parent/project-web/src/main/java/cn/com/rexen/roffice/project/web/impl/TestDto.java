package cn.com.rexen.roffice.project.web.impl;

import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.roffice.project.api.biz.IProjectBeanService;
import cn.com.rexen.roffice.project.api.query.ProjectDTO;

/**
 * Created by sunlf on 2015/11/19.
 */
public class TestDto {
    IProjectBeanService service;

    public void setService(IProjectBeanService service) {
        this.service = service;
    }

    public void test() {
        ProjectDTO dto = new ProjectDTO();
        dto.setName("el");
        dto.setLimit(10);
        dto.setPage(1);
//        JsonData jsonData=service.getAllEntity(1,10);
        JsonData jsonData = service.getAllByNativeQuery(dto);
        System.out.println(jsonData);
    }
}
