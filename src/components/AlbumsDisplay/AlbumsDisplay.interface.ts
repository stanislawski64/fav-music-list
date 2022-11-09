import { Album } from '../../types/types'

export interface AlbumsDisplayProps {
  albums: Album[]
  isListView: boolean
  onAlbumsUpdate: (updatedAlbums: Album[]) => void
}
