import { Box, styled } from '@mui/material'

export const Wrapper = styled('div')(({ theme }) => ({}))

export const TitleSocial = styled('div')(({ theme }) => ({
  margin: 'auto',
  width: 'fit-content',
  marginBottom: '30px'
}))

export const TitleText = styled('div')(({ theme }) => ({
  color: 'rgb(129, 140, 248)',
  fontSize: '35px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '120%',
  maxWidth: '618px'
}))

export const NeverBeenEasier = styled('div')(({ theme }) => ({
  fontWeight: 700,
  fontSize: '35px',
  color: 'white'
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  background: '#141420',
  borderRadius: '15px',
  padding: '10px',
  img: {
    width: '40%',
    height: '450px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    img: {
      width: '100%',
      height: '300px'
    }
  }
}))

export const ListItemSocial = styled('div')(({ theme }) => ({
  width: '60%',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const ItemContent = styled('div')(
  ({ selectedStt, chooseImage, stt }: { selectedStt: number; chooseImage: string; stt: number }) => ({
    display: 'flex',
    gap: '10px',
    borderRadius: '10px',
    padding: '15px',
    background: selectedStt === stt && chooseImage ? '#6366f1' : 'transparent',
    transition: 'all 0.4s',
    '.stt': {
      color: selectedStt === stt ? '#6366f1' : 'gray',
      background: selectedStt === stt ? 'white' : 'transparent',
      border: selectedStt === stt ? 'none' : '1px solid #242c3d',
      borderRadius: '50%',
      padding: '8px',
      width: '35px',
      height: '35px',
      textAlign: 'center',
      fontWeight: 700
    }
  })
)

export const StyledGrid = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
}))

export const Title = styled('div')(({ theme }) => ({
  color: 'white',
  fontWeight: 700
}))

export const Description = styled('div')(({ selectedStt, stt }: { selectedStt: number; stt: number }) => ({
  color: selectedStt === stt ? 'white' : 'rgb(104, 107, 126)'
}))
