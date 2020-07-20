package com.enigma.karyawan.exceptions;

import com.enigma.karyawan.constant.ExceptionsConstant;

public class FieldEmpty extends RuntimeException{

    public FieldEmpty() {
        super(String.format(ExceptionsConstant.EMPTY_FIELD));
    }

}
