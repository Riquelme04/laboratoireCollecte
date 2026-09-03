import { Injectable } from '@nestjs/common';
import { CreateRoom } from './dto/create-room.dto';
import { UpdateRoom } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
    private readonly rooms: Room [] = [];

create(createRoomDto: CreateRoom) {
    const newRoom = new Room(createRoomDto);

    this.rooms.push(newRoom);
    return newRoom;

}

findAll() {
    return `This action returns all rooms`;
}

findOne(id: string) {
    const room: Room | undefined this.rooms.find((room: Room) => room.id === id);
}

update(id: number, updateRoomDto: UpdateRoom) {
    const building: Room | undefined = this.rooms.find((room: Room) => room.id === id);
}

remove(id: string):void {
    const index: number = this.rooms.findIndex((room: Room) => room.id === id);
    if (index !== -1) {
        throw new Error(`Room with id ${id} not found`);
}

}
}