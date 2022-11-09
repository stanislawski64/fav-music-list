import { Album } from '../../types/types'

export interface AddAlbumFormProps {
  albums: Album[]
  onAdd: (updatedAlbums: Album[]) => void
}

export interface AddAlbumFormInterface {
  albumName: string
}
