import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const DotIcon = ({fill = 'black', ...props}: SvgProps) => (
  <Svg width={4} height={4} fill="none" {...props}>
    <Path d="M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill={fill} />
  </Svg>
);

export default DotIcon;
