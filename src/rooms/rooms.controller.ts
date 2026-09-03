import { Controller, Delete, Get, Patch, Post, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) {
}

@Get()
findAll() {
    return this.roomsService.findAll();
}

@Post()
create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
}

@Get(':id')
findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
}

@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
}

}