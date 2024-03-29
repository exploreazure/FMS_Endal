var CONFIG = {
    // Language of templates to use ( should be name of directory under src/templates/ )
    LANGUAGE: 'en',

    // Name of app to use in alert dialog titles amongst other things
    APP_NAME: 'FMS Endale',

    // URL of the fixmystreet install to report to
    FMS_URL: '',

    // namespace for storing drafts etc in. Should not need to change
    NAMESPACE: 'fixmystreet',

    // directory to store draft photos in. Should not need to change
    FILES_DIR: 'photos',

    // accuracy in meters required before geolocation is successful
    ACCURACY: 100,

    // how long, in milliseconds, before photo uploads timeout. Defaults to 120000 ( 2 minutes )
    UPLOAD_TIMEOUT: 120000,
    
    // testing flag - Do not submit report to RESTFul server
    TESTING: true,
    
    // display errors to console window
    DEBUG: true
};
