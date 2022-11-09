export type Album = {
  id: number
  album: string
  date: Date
  favorite: boolean
}

export type SortingMethod = { sortBy: SortBy; sortDirection: SortDir }

export enum SortDir {
  ASC = 'asc',
  DESC = 'desc',
}

export enum SortBy {
  ID = 'id',
  ALBUM = 'album',
  DATE = 'date',
}
