import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/material'

export const useStyles = makeStyles()((theme: Theme) => ({
  Toolbar: {
    width: '100%',
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  LanguageIcon: {
    marginLeft: 'auto',
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 900,
  },
}))
