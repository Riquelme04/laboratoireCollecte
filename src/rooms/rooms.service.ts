import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  private readonly rooms: Room[] = [];

  // POST /rooms
  create(createRoomDto: CreateRoomDto): Room {
    const { buildingId, code, floor, capacity, type } = createRoomDto;

    const newRoom = new Room(buildingId, code, floor, capacity, type);

    this.rooms.push(newRoom);
    return newRoom;
  }

  findAll(): Room[] {
    return this.rooms;
  }

  
  findOne(id: string): Room {
    const room = this.rooms.find((room) => room.id === id);

    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }

    return room;
  }

  update(id: string, updateRoomDto: UpdateRoomDto): Room {
    const room = this.findOne(id); 

    if (updateRoomDto.code !== undefined) {
      room.code = updateRoomDto.code;
    }

    if (updateRoomDto.buildingId !== undefined) {
      room.buildingId = updateRoomDto.buildingId;
    }

    if (updateRoomDto.floor !== undefined) {
      room.floor = updateRoomDto.floor;
    }

    if (updateRoomDto.capacity !== undefined) {
      room.capacity = updateRoomDto.capacity;
    }

    if (updateRoomDto.type !== undefined) {
      room.type = updateRoomDto.type;
    }

    room.updatedAt = new Date();

    return room;
  }

  // DELETE /rooms/:id
  remove(id: string): void {
    const index = this.rooms.findIndex((room) => room.id === id);

    if (index === -1) {
      // Si on ne trouve pas la room, on lève une NotFoundException
      throw new NotFoundException(`Room with id ${id} not found`);
    }

    this.rooms.splice(index, 1);
  }
}