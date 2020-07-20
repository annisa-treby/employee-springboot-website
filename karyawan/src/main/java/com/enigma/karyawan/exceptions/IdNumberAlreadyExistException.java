package com.enigma.karyawan.exceptions;

import com.enigma.karyawan.constant.ExceptionsConstant;

public class IdNumberAlreadyExistException extends RuntimeException{
    public IdNumberAlreadyExistException(String idNumber){
        super(String.format(ExceptionsConstant.ID_NUMBER, idNumber));
    }
}
