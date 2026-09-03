import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
    name: string;
    buildingId: number;
    floorNumber: number;
    area: number;
  }