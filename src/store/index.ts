import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import { createAPI } from '../services/api';

//сохраняем настроенный экземпляр axios в переменную
const api = createAPI();
//подключили мидлварю санки, чтобы через параметр экстрааргумент всегда иметь возможность обращаться к апи для вызова асинхронных действий!
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
