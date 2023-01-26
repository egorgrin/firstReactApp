import { Parallax } from 'react-parallax';
import imgOne from '../../../../../img/cover.webp';
import s from './Cover.module.css';

const ImageOne = () => (
  // Static Cover:
  // <div className={s.cover}>
  //   <div className="wp_container"></div>
  // </div>

  <Parallax className={s.cover} bgImage={imgOne} strength={400}></Parallax>
);

export default ImageOne;
