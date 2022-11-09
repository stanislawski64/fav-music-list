import { useEffect, useState } from 'react'

import { Album, SortBy, SortDir, SortingMethod } from '../types/types'
import {
  LOCAL_STORAGE_ALBUMS_KEY,
  LOCAL_STORAGE_LIST_VIEW_KEY,
  LOCAL_STORAGE_SORTING_METHOD_KEY,
} from '../components/constants'

export const useAlbums = () => {
  const getInitialValue = <T,>(localStorageKey: string, defaultValue: T) => {
    const localStorageValue = localStorage.getItem(localStorageKey)
    if (localStorageValue) {
      return JSON.parse(localStorageValue)
    }
    return defaultValue
  }

  const [albums, setAlbums] = useState<Album[]>(() =>
    getInitialValue(LOCAL_STORAGE_ALBUMS_KEY, [])
  )

  const [sortingMethod, setSortingMethod] = useState<SortingMethod>(() =>
    getInitialValue(LOCAL_STORAGE_SORTING_METHOD_KEY, {
      sortBy: SortBy.ID,
      sortDirection: SortDir.ASC,
    })
  )

  const [isListView, setIsListView] = useState<boolean>(() =>
    getInitialValue(LOCAL_STORAGE_LIST_VIEW_KEY, true)
  )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ALBUMS_KEY, JSON.stringify(albums))
  }, [albums])

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_SORTING_METHOD_KEY,
      JSON.stringify(sortingMethod)
    )
  }, [sortingMethod])

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_LIST_VIEW_KEY,
      JSON.stringify(isListView)
    )
  }, [isListView])

  const sortAlbums = (
    albumsProp: Album[],
    sortingMethodProp: SortingMethod
  ) => {
    const newAlbums = [...albumsProp]
    switch (sortingMethodProp.sortBy) {
      case SortBy.ALBUM:
        newAlbums.sort((a, b) => a[SortBy.ALBUM].localeCompare(b[SortBy.ALBUM]))
        break
      case SortBy.DATE:
        newAlbums.sort((a, b) =>
          new Date(a[SortBy.DATE]) > new Date(b[SortBy.DATE]) ? 1 : -1
        )
        break
      default:
        newAlbums.sort((a, b) =>
          a[sortingMethodProp.sortBy] > b[sortingMethodProp.sortBy] ? 1 : -1
        )
    }

    if (sortingMethodProp.sortDirection === SortDir.DESC) {
      newAlbums.reverse()
    }

    return newAlbums
  }

  return {
    albums,
    setAlbums,
    sortingMethod,
    setSortingMethod,
    sortAlbums,
    isListView,
    setIsListView,
  }
}
