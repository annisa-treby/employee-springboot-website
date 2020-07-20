package com.enigma.karyawan.service;

import com.enigma.karyawan.entity.Position;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface PositionService {
    public Position savePosition(Position position);
    public Position getPositionById(String id);
    public Page<Position> getAllPositions(Pageable pageable);
    public Position updatePosition(Position position);
    public void deletePosition(String id);
}
