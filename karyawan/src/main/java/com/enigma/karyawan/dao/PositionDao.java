package com.enigma.karyawan.dao;

import com.enigma.karyawan.entity.Position;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionDao extends JpaRepository<Position, String> {
}
