import { randomUUID } from "crypto";

export class Room {
    id: string;
    code: string
    buildingId: string;
    floo: number;
    type?: string;
    capacity: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(buildingId: string, code: string, floor: number, type: string, capacity: number) {
        this.id = randomUUID();
        this.buildingId = buildingId;
        this.code = code;
        this.floo = floor;
        type ?? this.type;
        this.capacity = capacity;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}