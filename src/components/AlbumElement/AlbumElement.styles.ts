import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/material'

export const useStyles = makeStyles<{
  favorite: boolean
  isListView: boolean
}>()((theme: Theme, { favorite, isListView }) => ({
  albumElement: {
    minHeight: isListView ? 100 : 150,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  trashIcon: {
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
      color: theme.palette.error.main,
    },
  },
  starIcon: {
    opacity: favorite ? 1 : 0.5,
    color: favorite ? theme.palette.warning.main : theme.palette.text.primary,
    '&:hover': {
      opacity: 1,
      color: theme.palette.warning.main,
    },
  },
  textContent: {
    wordBreak: 'break-word',
  },
}))
