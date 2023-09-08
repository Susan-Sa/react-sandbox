import { Slideshow } from ".";

export default {
  title: 'Common/Slideshow',
  component: Slideshow,
};

const photoArray = [
  { img: 'photo1', href: 'something', alt: 'Description' }, 
  { img: 'photo2', href: 'something', alt: 'Description' }, 
  { img: 'photo3', href: 'something', alt: 'Description' }, 
  { img: 'photo4', href: 'something', alt: 'Description' }
]

export const Default = () => <Slideshow slides={photoArray} />;
