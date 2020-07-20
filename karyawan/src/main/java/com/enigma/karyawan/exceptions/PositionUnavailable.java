package com.enigma.karyawan.exceptions;

import com.enigma.karyawan.constant.ExceptionsConstant;

public class PositionUnavailable extends RuntimeException {

    public PositionUnavailable(String id){
        super(String.format(ExceptionsConstant.POSITION_UNAVAILABLE, id));
    }

}
