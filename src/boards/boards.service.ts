import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; //다른 컴포넌트에서 접근차단을 위 private

  getAllBoards() {
    return this.boards;
  }
}
