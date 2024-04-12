import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import ImageGeneral from '../../../../components/Ui/image'
import feature1 from '../../../../images/HomePage/feature1v2.7b129301caf763a70230.png'
import feature2 from '../../../../images/HomePage/feature2v2.92c3ac8728c1408353ab.png'
import feature3 from '../../../../images/HomePage/feature3v2.2f56e355e6586acca4b7.png'
import feature4 from '../../../../images/HomePage/feature4.e814930061468baa2689f03f16c7cc5e.svg'
import icRight from '../../../../images/HomePage/icon-right.svg'
import { ROUTES } from '../../../../routes/routes'
import { ContentFeature, DetailFeature, ImageFeature, TryItOut, Wrapper } from './styles'
const featuresData = [
  {
    title: 'feature1Title',
    description: 'feature1Description',
    image: feature1
  },
  {
    title: 'feature2Title',
    description: 'feature2Description',
    image: feature2
  },
  {
    title: 'feature3Title',
    description: 'feature3Description',
    image: feature3
  },
  {
    title: 'feature4Title',
    description: 'feature4Description',
    image: feature4
  }
]
export default function ListFeature() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <Wrapper>
      {featuresData.map((feature, index) => (
        <DetailFeature key={index} style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
          <ImageFeature>
            <ImageGeneral src={feature?.image} alt={feature.title} />
          </ImageFeature>
          <ContentFeature>
            <h1>{t(feature?.title)}</h1>
            <p>{t(feature?.description)}</p>
            <TryItOut onClick={() => navigate(ROUTES.SIGN_IN)}>
              {t('Try it out')}
              <ImageGeneral src={icRight} />
            </TryItOut>
          </ContentFeature>
        </DetailFeature>
      ))}
    </Wrapper>
  )
}
