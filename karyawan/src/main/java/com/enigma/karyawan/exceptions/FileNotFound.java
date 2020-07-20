package com.enigma.karyawan.exceptions;

import com.enigma.karyawan.constant.ExceptionsConstant;

public class FileNotFound extends RuntimeException{

    public FileNotFound(String id){
        super(String.format(ExceptionsConstant.RESOURCE_NOTFOUND, id));
    }
}
