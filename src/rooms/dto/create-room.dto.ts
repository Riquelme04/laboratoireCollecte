import { ApiProperty } from '@nestjs/swagger';


export class CreateRoomDto {
  code!: string;        
  buildingId!: string;  
  floor!: number;       
  capacity!: number;    
  type?: string;        
}