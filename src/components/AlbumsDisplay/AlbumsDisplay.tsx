import { Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { AlbumElement } from '../AlbumElement/AlbumElement'

import { AlbumsDisplayProps } from './AlbumsDisplay.interface'

export const AlbumsDisplay = ({
  albums,
  isListView,
  onAlbumsUpdate,
}: AlbumsDisplayProps) => {
  const { t } = useTranslation()

  const removeElement = (id: number) => {
    onAlbumsUpdate(albums.filter((album) => album.id !== id))
  }

  const starElement = (id: number) => {
    const updatedAlbums = albums.map((album) =>
      album.id === id ? { ...album, favorite: !album.favorite } : album
    )
    onAlbumsUpdate(updatedAlbums)
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent={!albums.length ? 'center' : undefined}
    >
      {albums.map((album) => (
        <Grid
          item
          xs={!isListView ? 6 : 12}
          sm={!isListView && 6}
          md={!isListView && 4}
          lg={!isListView && 3}
          key={album.id}
        >
          <AlbumElement
            album={album}
            removeElement={() => removeElement(album.id)}
            starElement={() => starElement(album.id)}
            isListView={isListView}
          />
        </Grid>
      ))}
      {!albums.length && <Typography mt={2}>{t('noAlbumsAdded')}</Typography>}
    </Grid>
  )
}
