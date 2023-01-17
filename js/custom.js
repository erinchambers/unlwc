// Load 5.0 WDN Events plugins

WDN.initializePlugin('events', {
    url: 'https://events.unl.edu/writing/', 
    container:'#wdn_calendarDisplay', limit: 3
}); 

WDN.initializePlugin('monthwidget', {
    url: 'https://events.unl.edu/writing/'
}); 