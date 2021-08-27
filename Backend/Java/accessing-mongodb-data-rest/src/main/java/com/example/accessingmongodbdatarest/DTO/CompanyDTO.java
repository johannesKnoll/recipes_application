package com.example.accessingmongodbdatarest.DTO;

import com.example.accessingmongodbdatarest.Entities.Company;

public class CompanyDTO {
    private long id;
    private String name;
    private String telefon;
    private String owner;
    private String email;

    public CompanyDTO(Company company){
        this.id = company.getId();
        this.name = company.getName();
        this.telefon = company.getTelefon();
        this.owner = company.getOwner();
        this.email = company.getEmail();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
