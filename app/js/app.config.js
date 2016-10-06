'use strict';

angular.module('App')
  .constant('APP',{
    NAME: 'AvideoTest'
    ,DESCRIPTION: 'Video Test Description'
    ,CONFIG:{
      TEMPLATE:{
        CURRENT: 'default'
      }
      , API:{
        URL:'http://localhost:3000/'
        ,RESOURCES:{
          AUTH: 'user/auth'
          ,LOGOUT: 'user/logout'
          ,VIDEO: 'video'
        }
      }
    }
  })
;
