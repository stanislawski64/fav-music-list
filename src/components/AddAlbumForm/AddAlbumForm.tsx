import { Box, Button, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useStyles } from './AddAlbumForm.styles'
import {
  AddAlbumFormInterface,
  AddAlbumFormProps,
} from './AddAlbumForm.interface'

export const AddAlbumForm = ({ albums, onAdd }: AddAlbumFormProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  const generateId = (): number => {
    if (!albums.length) {
      return 1
    }
    const ids: number[] = albums.map(({ id }) => id)
    return Math.max(...ids) + 1
  }

  const { register, handleSubmit, reset } = useForm<AddAlbumFormInterface>()

  const onSubmit: SubmitHandler<AddAlbumFormInterface> = ({ albumName }) => {
    onAdd([
      ...albums,
      {
        id: generateId(),
        album: albumName,
        date: new Date(),
        favorite: false,
      },
    ])
    reset()
  }

  return (
    <Box display="flex" component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('albumName')}
        size="small"
        fullWidth
        className={classes.addAlbumTextField}
        placeholder={t('enterAlbumTitle')}
        required
      />
      <Button
        className={classes.addAlbumButton}
        variant="contained"
        type="submit"
      >
        {t('addToList')}
      </Button>
    </Box>
  )
}
