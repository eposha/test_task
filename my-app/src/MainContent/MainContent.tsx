import Navigation from './Navigation/Navigation';

import banana from '../svg/banana.svg';
import design from '../svg/design.svg';

import './MainContent.scss';

const MainContent = () => {
  return (
    <div className='main_content'>
      <div className='header_wrapp'>
        <h1 className='title'>Courses</h1>
        <Navigation />
      </div>
      <figure className='imgWrap'>
        <img src={banana} alt='Banana' className='image' />
      </figure>
      <figure className='imgWrap'>
        <img src={design} alt='design' className='image' />
      </figure>
    </div>
  );
};

export default MainContent;
