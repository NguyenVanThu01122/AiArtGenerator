import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
export const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  //background: theme.palette.background.default,
  background: `url("https://creatorhub.ai/static/media/icon-bg.13b9fb0520534454a7d0dfce174e7f89.svg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'rgb(3, 7, 18)',
  overflowY: 'auto',
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '5px !important'
  },
  '&::-webkit-scrollbar': {
    width: '4px !important'
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent !important'
  },
  '&:hover': {
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(217deg, #e250e5, #4b50e6) !important'
    }
  },

  [theme.breakpoints.down('sm')]: {
    padding: '16px'
  }
}))

export const MainContent = styled(Box)(({ theme }) => ({
  padding: ' 25px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  maxWidth: '1200px',
  margin: 'auto',
  '.ic-menu': {
    width: '26px',
    height: '26px',
    display: 'none !important',
    color: 'var(--text-color, #fff)'
  },

  [theme.breakpoints.down('sm')]: {
    padding: '0px',
    gap: '0px',
    '.ic-menu': {
      display: 'block !important'
    }
  }
}))

export const HeaderPage = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const Finalcontent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '480px',
  marginTop: '60px',
  padding: '100px 72px 75px',
  borderRadius: '12px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url("https://creatorhub.ai/static/media/readyv2.98204507bfb1f69096f6.png?fbclid=IwAR12qB2ly0x9bQxwbvJYpQTG4N02xK5nIFahSqLZLyE7itlJmXWyisZqOs4_aem_AZqQc7MWKnFmPXzoFS-c8LUo8EpAkeeI3uyEiFEx_tATOAeNOdb1iSBpIoobIDDKlXKZ_EBV_0q_BGGiInMm3RWO")`,
  [theme.breakpoints.down('sm')]: {
    height: '100%',
    padding: '100px 20px',
    paddingBottom: '320px',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("https://creatorhub.ai/static/media/readySmallv2.12176a46c1f653385678.png")`
  }
}))

export const TextFinal = styled(Typography)(({ theme }) => ({
  width: '65%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  paddingLeft: '50px',
  button: {
    width: '40%',
    height: '45px',
    marginTop: '30px',
    borderRadius: '8px',
    background: '#6366f1',
    boxShadow: 'rgba(129, 140, 248, 0.25) 0px 8px 30px 8px',
    color: '#fff',
    lineHeight: '120%',
    fontWeight: 700
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    paddingLeft: '0px',
    button: {
      width: '100%'
    }
  }
}))

export const ReadyText = styled('div')(({ theme }) => ({
  color: 'white',
  fontSize: '35px',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '25px'
  }
}))

export const Describe = styled(Typography)({
  color: 'white',
  fontSize: '16px'
})

export const InfoAboutUs = styled('div')(({ theme }) => ({
  marginTop: '80px',
  padding: '60px 20px',
  background: 'rgb(13, 18, 32)',
  [theme.breakpoints.down('sm')]: {
    padding: '40px 15px'
  }
}))

export const ProjectName = styled('div')(({ theme }) => ({
  width: '50%',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '10px',
  img: {
    width: '40px',
    height: '40px'
  }
}))

export const CreatorHup = styled('div')({
  color: 'white',
  fontSize: '22px',
  fontWeight: 600,
  letterSpacing: '2px'
})

export const Address = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  img: {
    width: '30px',
    height: '30px'
  },
  [theme.breakpoints.down('sm')]: {
    justifyCenter: 'space-between'
  }
}))

export const Email = styled('div')({
  color: 'white'
})

export const InfoMy = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    Margin: 'auto'
  }
}))

export const ItemSocialMedia = styled('div')(({ theme }) => ({
  width: '18%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    Margin: 'auto'
  }
}))

export const Footer = styled('div')(({ theme }) => ({
  width: '100%',
  borderTop: '1px solid #1a202f',
  marginTop: '50px',
  padding: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 500,
  '& > div:first-of-type': {
    color: '#777'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    textAlign: 'center',
    padding: '0px',
    marginTop: '20px',
    '& > div:first-of-type': {
      marginTop: '15px'
    }
  }
}))

export const GroupText = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    gap: '10px',
    margin: '10px 0px',
    fontSize: '12px'
  }
}))

export const TextFooter = styled('div')(({ theme }) => ({
  color: '#777',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px'
  }
}))
