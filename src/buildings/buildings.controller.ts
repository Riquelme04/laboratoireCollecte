import { Controller ,Get, Post, Body, Param } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';


@Controller('buildings')
export class BuildingsController {   
    constructor(private readonly buildingsService: BuildingsService) {}

  @Get()
  findAll() {
    return this.buildingsService.findAll();
  }

  @Post()
  create(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingsService.create(createBuildingDto);
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingsService.findOne(Number(id));
  }
}


