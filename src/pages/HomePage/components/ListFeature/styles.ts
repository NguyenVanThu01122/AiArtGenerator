import { styled } from "@mui/material"

export const Wrapper = styled('div')(({ theme }) => ({
    marginTop: '50px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    }
  }))
  
  export const DetailFeature = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '100px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
    },
  
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      padding: '0px',
      width: '100%'
    }
  }))
  
  export const ImageFeature = styled('div')(({ theme }) => ({
    width: '55%',
    height: '100%',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '10px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }))
  
  export const ContentFeature = styled('div')(({ theme }) => ({
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    h1: {
      fontWeight: 700,
      color: 'white'
    },
    p: {
      fontSize: '16px',
      color: '#d2d2d2'
    },
    div: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }))
  
  export const TryItOut = styled('div')(({ theme }) => ({
    width: '160px',
    height: '45px',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background: '#6366f1',
    boxShadow: 'rgba(129, 140, 248, 0.25) 0px 8px 30px 8px',
    color: '#fff',
    lineHeight: '120%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }))