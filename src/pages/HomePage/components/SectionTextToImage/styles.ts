import { Box, Card, CardContent, Grid, Theme, styled } from '@mui/material'

export const StyledGridHead = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  marginTop: '60px',
  '& .title': {
    width: '60%',
    '& > div:first-child': {
      color: 'rgb(165, 180, 252)',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '0.7px'
    },
    '& > div:last-child': {
      marginTop: '16px',
      color: 'rgb(255, 255, 255)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '120%',
      '& .empty': {
        boxShadow: '0px 8px 150px 20px rgb(129, 140, 248)'
      },
      '& span': {
        color: 'rgb(129, 140, 248)'
      }
    },
    '& img': {
      marginLeft: '100px'
    }
  },
  '& .content': {
    width: '40%',
    '& > div:first-child': {
      color: '#fff',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '150%'
    },
    '& img': {
      marginTop: '20px',
      width: '100%'
    }
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    marginTop: '50px',
    '& .title': {
      width: '100%'
    },
    '& .content': {
      width: '100%'
    }
  }
}))

export const StyledGridContent = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '620px',
  display: 'flex',
  gap: '30px',
  justifyContent: 'space-between',
  marginTop: '50px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: '700px'
  }
}))

export const StyledCard = styled(Card)(({ theme, textToImage }: { theme: Theme; textToImage: boolean }) => ({
  width: !textToImage ? '70%' : '30%',
  height: '100%',
  borderRadius: '10px',
  position: 'relative',
  transition: 'all 0.6s ease 0s',
  background: 'linear-gradient(rgba(8, 7, 23, 0) 43.92%, rgb(8, 7, 23) 94.74%)',

  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const BoxTextVideo = styled(Box)(({ textToImage }: { textToImage: boolean }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  padding: '15px',
  '& .ic-arrow': {
    zIndex: 100,
    cursor: 'pointer',
    padding: '6px',
    width: '45px',
    height: '45px',
    objectFit: 'cover',
    borderRadius: '50%',
    background: ' #6366f1',
    transition: 'all 0.3s ease 0s',
    display: textToImage ? 'none' : 'block'
  }
}))

export const ContentTextVideo = styled('div')(({ textToImage }: { textToImage: boolean }) => ({
  width: '70%',
  '& > div:first-child': {
    color: 'rgb(255, 255, 255)',
    fontSize: '30px',
    fontWeight: 700,
    lineHeight: '150%'
  },

  '& > div:last-child': {
    color: 'var(--text-primary, #fff)',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '150%',
    display: textToImage ? 'none' : 'block'
  }
}))

export const ContentTextImage = styled('div')(({ textToImage }: { textToImage: boolean }) => ({
  width: '70%',
  '& > div:first-child': {
    color: 'rgb(255, 255, 255)',
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '150%'
  },
  '& > div:last-child': {
    color: 'var(--text-primary, #fff)',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '150%',
    display: !textToImage ? 'none' : 'block'
  }
}))

export const StyledCardContent = styled(CardContent)(({ textToImage }: { textToImage: boolean }) => ({
  width: '100%',
  height: '100%',
  zIndex: 100,
  position: 'absolute',
  transition: 'all 0.6s ease 0s',
  display: 'flex',
  gap: '30px',
  padding: '20px',
  background: textToImage
    ? 'linear-gradient(rgba(8, 7, 23, 0) 0%, rgba(68, 12, 94, 0) 0.01%, rgb(55, 48, 163) 100%)'
    : 'transparent'
}))

export const BoxTexToImage = styled(Box)(({ theme, textToImage }: { textToImage: any; theme: Theme }) => ({
  height: '100%',
  width: textToImage ? '70%' : '30%',
  position: 'relative',
  backgroundImage:
    'url(https://cdn.dribbble.com/userupload/4993439/file/original-68a1993c7f2e19c9d70147ebc1b82eac.png?resize=1024x768)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center center',
  borderRadius: '12px',
  transition: 'all 0.6s ease 0s',
  border: textToImage ? '1px solid gray' : 'none',
  boxShadow: textToImage && ' 0px 0px 10px 0.5px rgb(255,255,255)',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const TexToImage = styled('div')(({ textToImage }: { textToImage: any }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  padding: '15px 15px 50px 15px',
  background: !textToImage
    ? 'linear-gradient(rgba(8, 7, 23, 0) 0%, rgba(68, 12, 94, 0) 0.01%, rgb(55, 48, 163) 100%)'
    : 'transparent',
  img: {
    cursor: 'pointer',
    padding: '6px',
    width: '45px',
    height: '45px',
    objectFit: 'cover',
    borderRadius: '50%',
    background: ' #6366f1',
    transition: 'all 0.3s ease 0s',
    display: !textToImage ? 'none' : 'block'
  }
}))
