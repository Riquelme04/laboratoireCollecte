import { randomUUID } from 'crypto';

export class Room {
  id: string;
  code: string;
  buildingId: string;
  floor: number;
  type?: string;
  capacity: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    buildingId: string,
    code: string,
    floor: number,
    capacity: number,
    type?: string,
  ) {
    this.id = randomUUID();
    this.buildingId = buildingId;
    this.code = code;
    this.floor = floor;
    this.type = type;
    this.capacity = capacity;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}