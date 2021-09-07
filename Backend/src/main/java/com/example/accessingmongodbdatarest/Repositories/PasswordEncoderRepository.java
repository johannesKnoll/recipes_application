package com.example.accessingmongodbdatarest.Repositories;

public interface PasswordEncoderRepository {
    String encode(CharSequence var1);

    boolean matches(CharSequence var1, String var2);
}
