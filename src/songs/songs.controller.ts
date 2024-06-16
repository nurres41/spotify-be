import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals by Nuri');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'Song one find all';
  }
  @Put(':id')
  update() {
    return 'update song';
  }
  @Delete(':id')
  delete() {
    return 'delete song';
  }
}
