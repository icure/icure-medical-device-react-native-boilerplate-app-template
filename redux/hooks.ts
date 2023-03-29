import {AppDispatch} from './store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppState} from './reducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;