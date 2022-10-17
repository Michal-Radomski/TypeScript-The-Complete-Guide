// Types and Interfaces

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Action = typeof store.action;
