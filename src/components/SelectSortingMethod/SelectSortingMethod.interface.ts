import { SortingMethod } from '../../types/types'

export interface SelectSortingMethodProps {
  sortingMethod: SortingMethod
  onSortingMethodChange: (newSortingMethod: SortingMethod) => void
}
