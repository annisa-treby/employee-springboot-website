package com.enigma.karyawan.service;

import com.enigma.karyawan.dao.PositionDao;
import com.enigma.karyawan.entity.Position;
import com.enigma.karyawan.exceptions.FileNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class PositionServiceImpl implements PositionService {

    @Autowired
    PositionDao positionDao;

    @Override
    public Position savePosition(Position position) {
        position.setIsDelete(false);
        Position position1 = positionDao.save(position);
        return position1;
    }

    @Override
    public Position getPositionById(String id) {
        Position position = positionDao.findById(id).get();
        if (position != null){
            return position;
        } else {
            throw new FileNotFound(id);
        }
    }

    @Override
    public Page<Position> getAllPositions(Pageable pageable) {
        Page<Position> positions = positionDao.findAll(pageable);
        return positions;
    }

    @Override
    public Position updatePosition(Position position) {
        Position position1 = getPositionById(position.getId());
        if (position1 != null){
            return positionDao.save(position);
        } else {
            throw new FileNotFound(position.getId());
        }
    }

    @Override
    public void deletePosition(String id) {
        Position position = getPositionById(id);
        position.setIsDelete(true);
        updatePosition(position);
    }
}
