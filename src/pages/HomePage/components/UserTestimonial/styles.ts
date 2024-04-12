import { Box, Grid, Typography, styled } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import ImageGeneral from '../../../../components/Ui/image'

export const ContainerTestimonials = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '.quotation': {
    width: '50px',
    height: '50px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

export const StyledCarousel = styled(Carousel)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}))

export const TitleTestimonial = styled('h2')(({ theme }) => ({
  width: '50%',
  margin: 'auto',
  fontWeight: 800,
  fontSize: '35px',
  marginTop: '40px',
  textAlign: 'center',
  color: '#6366f1',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const UserName = styled('h5')({
  fontSize: '22px',
  fontWeight: 700,
  color: '#0077cc'
})

export const UserJob = styled('p')({
  color: '#777'
})

export const ContainerImg = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    overflowX: 'auto'
  }
}))

export const CustomImgTestimonial = styled(ImageGeneral)(({ selected, img }: { selected: any; img: string }) => ({
  height: selected?.img === img ? '400px' : '220px',
  transition: selected?.img === img ? 'transform 0.3s ease-in-out' : '',
  cursor: 'pointer',
  '&:hover': {
    transform: selected?.img === img ? 'scale(1.2)' : ''
  }
}))

export const BoxImages = styled(Box)({
  display: 'flex',
  img: {
    display: 'flex',
    justifyContent: 'end',
    margin: 'auto'
  }
})

export const TestimonialText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontStyle: 'italic',
  width: '80%',
  height: '80px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%'
  }
}))

export const TestimonialAuthor = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: 'blue',
  span: {
    color: 'white'
  }
}))

export const ContentGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})
