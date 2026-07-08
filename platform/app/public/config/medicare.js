window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  investigationalUseDialog: {
    option: 'never',
  },
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'medicare',
      configuration: {
        friendlyName: 'Medicare PACS',
        name: 'Medicare PACS',
        qidoRoot: 'http://localhost:7000/dicomweb',
        wadoRoot: 'http://localhost:7000/dicomweb',
        wadoUriRoot: 'http://localhost:7000/wado',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadouri',
        thumbnailRendering: 'wadouri',
        enableStudyLazyLoad: false,
      },
    },
  ],
  defaultDataSourceName: 'medicare',
};
