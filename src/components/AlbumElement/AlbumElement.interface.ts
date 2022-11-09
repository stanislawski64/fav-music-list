import { Album } from '../../types/types'

export interface AlbumElementProps {
  album: Album
  removeElement: () => void
  starElement: () => void
  isListView: boolean
}
