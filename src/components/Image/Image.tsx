import React, {FC, useEffect, useState} from 'react';
import {Image as RNImage, Pressable} from 'react-native';

import S from './Image.styles';
import {ImageDimensions, ImageProps} from './Image.types';

const getSize = async (uri: string) => {
  const result: ImageDimensions = await new Promise((resolve, reject) =>
    RNImage.getSize(uri, (width, height) => resolve({width, height}), reject),
  );

  return result;
};

export const Image: FC<ImageProps> = ({
  source,
  enableModal = false,

  ...props
}) => {
  const [dimensions, setDimensions] = useState<ImageDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!!source) getSize(source).then(setDimensions);
  }, [source]);

  const componentProps: any = {
    source: {uri: source},
    aspectRatio: dimensions.width / dimensions.height || 1,
  };

  const Component = <S.Root {...componentProps} {...props} />;

  return enableModal ? <Pressable>{Component}</Pressable> : Component;
};
