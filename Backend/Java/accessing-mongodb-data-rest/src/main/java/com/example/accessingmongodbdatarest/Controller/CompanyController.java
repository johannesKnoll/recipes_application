package com.example.accessingmongodbdatarest.Controller;

import com.example.accessingmongodbdatarest.DTO.CompanyDTO;
import com.example.accessingmongodbdatarest.Entities.Company;
import com.example.accessingmongodbdatarest.Payload.Request.NewCompanyRequest;
import com.example.accessingmongodbdatarest.Services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @RequestMapping("/createCompany")
    public String create(@RequestBody NewCompanyRequest newCompanyRequest){
        Company company = companyService.create(newCompanyRequest.getUser(), newCompanyRequest.getName(), newCompanyRequest.getOwner(), newCompanyRequest.getEmail(), newCompanyRequest.getTelefon());
        return company.toString();
    }

    @RequestMapping("/getAllCompanies")
    public List<Company> getAll(){
        return companyService.getAll();
    }

    @RequestMapping("/getCompanyById/{companyId}")
    public CompanyDTO getCompanyById(@PathVariable("companyId") long id){
        return companyService.getCompanyById(id);
    }

    @RequestMapping("/getCompanyByProductId/{productId}")
    public Company getCompanyByProductId(@PathVariable("productId")long productId){
        return companyService.getCompanyByProductId(productId);
    }

    @RequestMapping("/getCompanyDTOByProductId/{productId}")
    public CompanyDTO getCommpanyByProductId(@PathVariable("productId") long productId){
        return companyService.getCompanyDTOByProductId(productId);
    }

    @RequestMapping("/getCompanyByUserId/{userId}")
    public Long getCompanyByUserId(@PathVariable("userId")long userId){
        return companyService.getCompanyByUserId(userId);
    }



}
