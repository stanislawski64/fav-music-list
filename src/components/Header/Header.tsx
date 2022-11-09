import LanguageIcon from '@mui/icons-material/Language'
import { MouseEvent, useState } from 'react'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { LOCAL_STORAGE_LANGUAGE_KEY } from '../constants'

import { useStyles } from './Header.styles'

export const Header = () => {
  const { classes } = useStyles()
  const { t, i18n } = useTranslation()

  const changeLanguage = (languageCode: string) => {
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, languageCode)
    i18n.changeLanguage(languageCode)
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const languages = ['en', 'pl']

  return (
    <Toolbar className={classes.Toolbar}>
      <Box display="flex" justifyContent="center" ml={8} width={1}>
        <Typography variant="h4" className={classes.title}>
          FAV MUSIC LIST
        </Typography>
      </Box>
      <Tooltip title={t('changeLanguage')} className={classes.LanguageIcon}>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={language}
            onClick={() => {
              changeLanguage(language)
              handleClose()
            }}
          >
            {t(language)}
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  )
}
