package com.enigma.karyawan.controller;

import com.enigma.karyawan.entity.Position;
import com.enigma.karyawan.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/position")
public class PositionController {

    @Autowired
    PositionService positionService;

    @PostMapping
    public Position savePosition(@RequestBody Position position){
        return positionService.savePosition(position);
    }

    @GetMapping
    public Page<Position> getAllPositions(@RequestParam(defaultValue = "0", value = "page")  Integer page, @RequestParam(defaultValue = "5", value = "size")  Integer size){
        Pageable pageable = PageRequest.of(page, size);
        return positionService.getAllPositions(pageable);
    }

    @GetMapping("/{id}")
    public Position getPositionById(@PathVariable String id){
        return positionService.getPositionById(id);
    }

    @PutMapping
    public Position updatePosition(@RequestBody Position position){
        return  positionService.updatePosition(position);
    }

    @DeleteMapping("/{id}")
    public void deletePosition(@PathVariable String id){
        positionService.deletePosition(id);
    }
}
