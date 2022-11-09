import { Box } from '@mui/material'

import { AddAlbumForm } from '../components/AddAlbumForm/AddAlbumForm'
import { AlbumsDisplay } from '../components/AlbumsDisplay/AlbumsDisplay'
import { ChangeViewModel } from '../components/ChangeViewModel/ChangeViewModel'
import { SelectSortingMethod } from '../components/SelectSortingMethod/SelectSortingMethod'
import { useAlbums } from '../hooks/useAlbums'
import { Album, SortingMethod } from '../types/types'
import { Header } from '../components/Header/Header'

export const Home = () => {
  const {
    albums,
    setAlbums,
    sortingMethod,
    setSortingMethod,
    sortAlbums,
    isListView,
    setIsListView,
  } = useAlbums()

  const updateAlbums = (
    updatedAlbums: Album[],
    newSortingMethod: SortingMethod = sortingMethod
  ) => {
    const newAlbums = sortAlbums(updatedAlbums, newSortingMethod)
    setAlbums(newAlbums)
  }

  const onAlbumsUpdate = (updatedAlbums: Album[]) => {
    updateAlbums(updatedAlbums, sortingMethod)
  }

  const onSortChange = (newSortingMethod: SortingMethod) => {
    setSortingMethod(newSortingMethod)
    updateAlbums(albums, newSortingMethod)
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Header />
      <Box maxWidth="sm" width={1} mt={2}>
        <AddAlbumForm albums={albums} onAdd={onAlbumsUpdate} />
      </Box>
      <Box display="flex" mt={4} alignItems="center">
        <SelectSortingMethod
          sortingMethod={sortingMethod}
          onSortingMethodChange={onSortChange}
        />
        <Box ml={2}>
          <ChangeViewModel
            isListView={isListView}
            setIsListView={setIsListView}
          />
        </Box>
      </Box>
      <Box maxWidth="lg" width={1} mt={4} mb={4}>
        <AlbumsDisplay
          albums={albums}
          isListView={isListView}
          onAlbumsUpdate={onAlbumsUpdate}
        />
      </Box>
    </Box>
  )
}
