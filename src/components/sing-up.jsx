import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRegister } from '../hook/userRegister'


export const Register = () => {
  const { handleSubmit, register, reset } = useForm()
  const { mutate } = useRegister()
  const navigate = useNavigate()

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/main-layout')
      }
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <Stack>
          <TextField variant='outlined' placeholder='Name' {...register('name')} />
          <TextField variant='outlined' placeholder='Email' {...register('email')} />
          <TextField variant='outlined' placeholder='Password' {...register('password')} />
        </Stack>
        <Button variant='contained' type='submit'>Submit</Button>
      </form>
    </Container>
  )
}
