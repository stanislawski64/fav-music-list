import { Dispatch, SetStateAction } from 'react'

export interface ChangeViewModelProps {
  isListView: boolean
  setIsListView: Dispatch<SetStateAction<boolean>>
}
