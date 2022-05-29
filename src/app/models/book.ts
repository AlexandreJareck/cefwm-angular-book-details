import { VolumeInfo } from './volume-info';
export class Book {
  constructor(
    public volumeInfo: VolumeInfo,
    public searchInfo: SearchInfo,
    public visibleDescription: boolean
  ) {}
}

export class SearchInfo {
  constructor(public textSnippet: string) {}
}
