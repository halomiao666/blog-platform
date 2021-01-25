import routes from './routes';
// import Logo from '@/assets/userLogo';
const config = {
  publicPath: '/',
  nodeModulesTransform: {
    type: 'none'
  },
  layout: {},
  routes: routes,
  manifest: {
    basePath: '/',
  },
};

export default config;