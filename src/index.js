import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Router from './config/Routes'

import {store} from './redux/store'
import {Provider} from 'react-redux'

EStyleSheet.build({
  $primary: '#FF9A8E',
  $white: '#ffff',
  $black: '#000000',
  $border: '#E2E2E2',
  $gray: '#F0F0F0',
})

export default () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
