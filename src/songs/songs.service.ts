import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song) {
    // save song in the db
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    return this.songs;
  }
}
