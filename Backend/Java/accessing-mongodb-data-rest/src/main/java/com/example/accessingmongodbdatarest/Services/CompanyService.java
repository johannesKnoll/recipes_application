package com.example.accessingmongodbdatarest.Services;

import com.example.accessingmongodbdatarest.DTO.CompanyDTO;
import com.example.accessingmongodbdatarest.Entities.Company;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public Company create(User user, String name, String owner, String email, String telefon){
        return companyRepository.save(new Company(user, name, owner, email, telefon));
    }

    public List<Company> getAll(){
        Iterator<Company> source = companyRepository.findAll().iterator();
        List<Company> target = new ArrayList<>();
        source.forEachRemaining(target::add);

        return target;
    }

    public Company getCompanyByProductId(long productId){
        return companyRepository.findCompanyByProducts(productId);
    }

    public Long getCompanyByUserId(long userId){
        return companyRepository.findByUser_Id(userId).getId();
    }

    public CompanyDTO getCompanyById(long id){
        CompanyDTO company = new CompanyDTO(companyRepository.findById(id));

        return company;
    }

    public CompanyDTO getCompanyDTOByProductId(long productId){
        CompanyDTO company = new CompanyDTO(companyRepository.findCompanyByProducts(productId));

        return company;
    }

    public Company getByName(String name){
        return companyRepository.findByName(name);
    }
}
