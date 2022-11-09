import { IconButton, Tooltip } from '@mui/material'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ViewListIcon from '@mui/icons-material/ViewList'
import { useTranslation } from 'react-i18next'

import { ChangeViewModelProps } from './ChangeViewModel.interface'

export const ChangeViewModel = ({
  isListView,
  setIsListView,
}: ChangeViewModelProps) => {
  const { t } = useTranslation()

  return (
    <Tooltip title={t('changeViewModel')}>
      <IconButton
        size="large"
        onClick={() => {
          setIsListView((state) => !state)
        }}
      >
        {isListView ? <ViewModuleIcon /> : <ViewListIcon />}
      </IconButton>
    </Tooltip>
  )
}
