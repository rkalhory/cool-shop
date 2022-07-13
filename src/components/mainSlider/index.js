import {memo} from 'react'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import pic1 from '../../assets/images/slider/s1-1.jpg'
import pic2 from '../../assets/images/slider/s2-2.jpg'
import pic3 from '../../assets/images/slider/s3-3.jpg'
import './style.scss'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const MainSlider=()=> (
    <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={8000}
    >
        <div data-src={pic1} />
        <div data-src={pic2} />
        <div data-src={pic3} />
    </AutoplaySlider>
)

export default memo(MainSlider)