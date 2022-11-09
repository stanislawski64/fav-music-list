import {
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import StarIcon from '@mui/icons-material/Star'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

import { AlbumElementProps } from './AlbumElement.interface'
import { useStyles } from './AlbumElement.styles'

export const AlbumElement = ({
  album,
  removeElement,
  starElement,
  isListView,
}: AlbumElementProps) => {
  const { classes } = useStyles({ favorite: album.favorite, isListView })
  const { t } = useTranslation()

  const dateFormat = 'dd/MM/yyyy, HH:mm:ss'

  const prefixIdWithZero =
    String(album.id).split('').length === 1 ? `0${album.id}` : album.id

  return (
    <ListItem className={classes.albumElement}>
      <ListItemText
        primary={`${prefixIdWithZero}. ${album.album}`}
        secondary={format(new Date(album.date), dateFormat)}
        className={classes.textContent}
      />
      <Stack direction={isListView ? 'row' : 'column'} spacing={1}>
        <Tooltip title={t('setAsFavorite')} disableInteractive>
          <IconButton
            aria-label="favorite"
            onClick={starElement}
            className={classes.starIcon}
          >
            <StarIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('remove')} disableInteractive>
          <IconButton
            aria-label="delete"
            onClick={removeElement}
            className={classes.trashIcon}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </ListItem>
  )
}
