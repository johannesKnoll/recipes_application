package com.example.accessingmongodbdatarest.Payload.Request;

public class UpdateUsernameRequest {

    private String username;

    public UpdateUsernameRequest(String username) {
        this.username = username;
    }

    public UpdateUsernameRequest(){

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
