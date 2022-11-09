import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box } from '@mui/material'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { SortingMethod, SortBy, SortDir } from '../../types/types'

import { SelectSortingMethodProps } from './SelectSortingMethod.interface'

export const SelectSortingMethod = ({
  sortingMethod,
  onSortingMethodChange,
}: SelectSortingMethodProps) => {
  const { t } = useTranslation()

  const handleSortingMethodChange = (event: SelectChangeEvent) => {
    onSortingMethodChange(JSON.parse(event.target.value))
  }

  const options: SortingMethod[] = useMemo(() => {
    const generatedSortingMethods: SortingMethod[] = []
    Object.values(SortBy).map((sortBy) =>
      Object.values(SortDir).map((sortDirection) => {
        return generatedSortingMethods.push({
          sortBy,
          sortDirection,
        })
      })
    )
    return generatedSortingMethods
  }, [])

  const MenuItems = useMemo(
    () =>
      options.map((item) => {
        const { sortBy, sortDirection } = item
        return (
          <MenuItem
            key={sortBy + sortDirection}
            value={JSON.stringify(item)}
          >{`${t(sortBy)} ${
            sortDirection === SortDir.ASC ? '↑' : '↓'
          }`}</MenuItem>
        )
      }),
    [options, t]
  )

  return (
    <Box minWidth={240}>
      <FormControl fullWidth>
        <InputLabel id="sortingMethod">{t('sortingMethod')}</InputLabel>
        <Select
          labelId="sortingMethod"
          value={JSON.stringify(sortingMethod)}
          label={t('sortingMethod')}
          onChange={handleSortingMethodChange}
        >
          {MenuItems}
        </Select>
      </FormControl>
    </Box>
  )
}
