package com.example.accessingmongodbdatarest.Payload.Request;

public class UpdatePasswordRequest {

    private String password;
    private String repeatPassword;


    public UpdatePasswordRequest(String password, String repeatPassword){
        this.password = password;
        this.repeatPassword = repeatPassword;
    }
    public UpdatePasswordRequest(){

    }

    public String getPassword(){
        return password;
    }

    public String getRepeatPassword() {
        return repeatPassword;
    }
    public void setPassword(String password){
        this.password = password;
    }


    public void setRepeatPassword(String repeatPassword){
        this.repeatPassword = repeatPassword;
    }
}
