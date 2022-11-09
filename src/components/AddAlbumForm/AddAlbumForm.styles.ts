import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/material'

export const useStyles = makeStyles()((theme: Theme) => ({
  addAlbumTextField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: `${theme.spacing(0.5)} 0px 0px ${theme.spacing(0.5)}`,
      backgroundColor: theme.palette.background.paper,
      '& fieldset': {
        borderColor: theme.palette.background.paper,
      },
    },
  },
  addAlbumButton: {
    width: '210px',
    borderRadius: `0px ${theme.spacing(0.5)} ${theme.spacing(0.5)} 0px`,
  },
}))
