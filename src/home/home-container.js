import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetch from '../utils/fetch';
import Home from './home';
import { fillHome } from '../state/home/home-actions';
import { stateSelectorProp } from '../state/selector/general';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const homeContentLoaded = useSelector(state => stateSelectorProp(state, 'home', 'isLoaded'));

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/home');
      if (!response.error) {
        dispatch(fillHome(response.data));
      }
    };
    if (!homeContentLoaded) {
      fetchContent();
    }
  }, [dispatch, homeContentLoaded]);
  return (
    <Home />
  );
};


export default HomeContainer;
