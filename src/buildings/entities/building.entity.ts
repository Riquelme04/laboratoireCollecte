export class Building {
    id: number;
    name: string;
    address: string;
    yearBuilt: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, address: string, yearBuilt: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
  }
  