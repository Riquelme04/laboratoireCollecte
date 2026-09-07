import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingsService {
  private readonly buildings: Building[] = [];
  private nextId = 1;

  // GET /api/buildings
  findAll(): Building[] {
    return this.buildings;
  }

  // GET /api/buildings/:id
  findOne(id: number): Building {
    const building = this.buildings.find((b) => b.id === id);
    if (!building) {
      throw new NotFoundException(`Building with id ${id} not found`);
    }
    return building;
  }

  // POST /api/buildings
  create(createBuildingDto: CreateBuildingDto): Building {
    const { name, address, yearBuilt } = createBuildingDto;

    const building = new Building(this.nextId, name, address, yearBuilt);
    this.nextId += 1;

    this.buildings.push(building);
    return building;
  }

  // PATCH /api/buildings/:id (facultatif)
  update(id: number, updateBuildingDto: UpdateBuildingDto): Building {
    const building = this.findOne(id);

    if (updateBuildingDto.name !== undefined) {
      building.name = updateBuildingDto.name;
    }
    if (updateBuildingDto.address !== undefined) {
      building.address = updateBuildingDto.address;
    }
    if (updateBuildingDto.yearBuilt !== undefined) {
      building.yearBuilt = updateBuildingDto.yearBuilt;
    }

    building.updatedAt = new Date();
    return building;
  }

  // DELETE /api/buildings/:id (optionnel)
  remove(id: number): void {
    const index = this.buildings.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException(`Building with id ${id} not found`);
    }
    this.buildings.splice(index, 1);
  }
}