import { ApiProperty } from '@nestjs/swagger';

export class CreateBuildingDto {
    @ApiProperty({ 
      description: 'Nom du bâtiment',
      example: 'Bâtiment A'})
    name: string;
    address: string;
    yearBuilt: number;
  }
  