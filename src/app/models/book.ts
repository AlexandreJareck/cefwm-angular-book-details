export class Books {
  constructor(public items: Book[]) {}
}

export class Book {
  constructor(public volumeInfo: VolumeInfo) {}
}

class VolumeInfo {
  constructor(
    public authors: string[],
    public title: string,
    public subtitle: string,
    public pageCount: number,
    public categories: string[],
    public imageLinks: ImageLinks
  ) {}
}

class ImageLinks {
  constructor(public smallThumbnail: string, public thumbnail: string) {}
}
