export class Building {
    id: number;
    code: string;
    name: string;
    address: string;
    yearBuilt: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, code: string, name: string, address: string, yearBuilt: number) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
  }
  