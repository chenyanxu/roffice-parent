package cn.com.rexen.roffice.cm.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;

/**
 * @author chenyanxu
 */
public class ContractDto extends QueryDTO {
    private String contractNumber;//合同编号

    public String getContractNumber() {
        return contractNumber;
    }

    public void setContractNumber(String contractNumber) {
        this.contractNumber = contractNumber;
    }
}
