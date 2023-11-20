import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {StoreProvider } from './StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'providers/StoreProvider/config/storeSchema';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StoreSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
              {component}
            </StoreProvider>
        </MemoryRouter>,
    );
}


