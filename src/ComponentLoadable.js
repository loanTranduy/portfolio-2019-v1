import {createLoadable} from './utils/loadable'

export const LoadableWebDesignScreen = createLoadable(
    () => import(/* webpackChunkName: "WebDesignScreen" */ './screens/WebDesignScreen'),
    'WebDesignScreen'
);

export const LoadableGraphicDesignScreen = createLoadable(
    () => import(/* webpackChunkName: "FrontEndScreen" */ './screens/GraphicDesignScreen'),
    'GraphicDesignScreen'
);

export const LoadableFrontEndScreen = createLoadable(
    () => import(/* webpackChunkName: "FrontEndScreen" */ './screens/FrontEndScreen'),
    'FrontEndScreen'
);

export const LoadableWorkScreen = createLoadable(
    () => import(/* webpackChunkName: "WorkScreen" */ './screens/WorkScreen'),
    'WorkScreen'
);

export const LoadableAboutScreen = createLoadable(
    () => import(/* webpackChunkName: "AboutScreen" */ './screens/AboutScreen'),
    'AboutScreen'
);

export const LoadableLandingScreen = createLoadable(
    () => import(/* webpackChunkName: "LandingScreen" */ './screens/LandingScreen'),
    'LandingScreen',
);

export const LoadableFrontEndProjectScreen = createLoadable(
    () => import(/* webpackChunkName: "ProjectFrontEndScreen" */ './screens/ProjectFrontEndScreen'),
    'ProjectFrontEndScreen',
);