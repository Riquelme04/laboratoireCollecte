import { ApiProperty } from '@nestjs/swagger';


export class CreateRoomDto {
  @ApiProperty({ 
    description: 'Code du local',
    example: 'A101'})
  code!: string;        
  buildingId!: string;  
  floor!: number;       
  capacity!: number;    
  type?: string;        
}