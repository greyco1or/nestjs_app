import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; //다른 컴포넌트에서 접근차단을 위해서 private

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string): Board {
    const board: Board = {
      id: uuid,
      title: title,
      description, //이렇게 써줘도 상관없음
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }
}
