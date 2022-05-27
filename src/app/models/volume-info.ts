import { ImageLinks } from './image-links';

export class VolumeInfo {
  constructor(
    public authors: string[],
    public title: string,
    public subtitle: string,
    public pageCount: number,
    public categories: string[],
    public imageLinks: ImageLinks,
    public publishedDate: string,
    public canonicalVolumeLink: string
  ) {}
}
