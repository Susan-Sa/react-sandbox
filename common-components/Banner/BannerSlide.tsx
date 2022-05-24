import { BannerImageStyled } from './styles';

interface BannerSlideProps {
  isCurrentSlide: boolean;
  post: any;
}

export const BannerSlide = ({ isCurrentSlide, post }: BannerSlideProps) => (
  <BannerImageStyled
    alt={post.title.rendered}
    isCurrentSlide={isCurrentSlide}
    layout="fill"
    objectFit="cover"
    objectPosition="top"
    priority
    sizes="60vw"
    src={post._embedded['wp:featuredmedia']['0'].source_url}
  />
);

BannerSlide.displayName = 'BannerControls';
