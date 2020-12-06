import React from 'react';
import { StyleSheet } from 'react-native';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker(props) {
  return (
    <>
      <ImageInputList imageUris={} />
      <ErrorMessage />
    </>
  );
}

export default FormImagePicker;

const styles = StyleSheet.create({

})