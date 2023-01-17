// Load WDN Events plugins
WDN.initializePlugin('monthwidget', {url: 'https://events.unl.edu/writing/'}); 
WDN.initializePlugin('events', {url: 'https://events.unl.edu/writing/', limit:6});
WDN.setPluginParam('events', 'href', '//events.unl.edu/writing/');
WDN.setPluginParam('events', 'title', 'Writing Center');