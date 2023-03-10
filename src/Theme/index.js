import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 428;
const guidelineBaseHeight = 800;

export const scale = size => 
  Math.round((width / guidelineBaseWidth) * size);

export const verticalScale = size =>
  Math.round((height / guidelineBaseHeight) * size);

export const moderateScale = (size, factor = 0.5) =>
  Math.round(size + (scale(size) - size) * factor);

export const scalePercentage = percentage => {
    const scaleFactor = percentage / 100;
    return Math.round(width * scaleFactor);
}

export const verticalScalePercentage = percentage => {
    const scaleFactor = percentage / 100;
    return Math.round(height * scaleFactor);
}