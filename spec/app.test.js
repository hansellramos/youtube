'use strict';

xdescribe('Template Test',function(){
  var appScope, authScope, appController, authController;
  beforeEach(function(){
    module('App');
    inject(function($controller, $rootScope){
      appScope = $rootScope.$new();
      authScope = $rootScope.$new();
      appController = $controller('AppController',{$scope:appScope});
      authController = $controller('AuthController',{$scope:authScope});
    });
  });

  it('Dede de definir un objeto lista',function(){
    expect(scope.list).toBeDefined();
  }); 
  it('La lista debe de tener almenos un elemento',function(){
    expect(scope.list.length).toBeGreaterThan(0);
  }); 
  it('El primer elemento de la lista debe de ser de tipo String',function(){
    expect(typeof(scope.list[0])).toBe('string');
  }); 
  it('debe agregar un elemento al final de la lista',function(){
    scope.addItem("Barranquilla");
    var lastIndexOfList = scope.list.length-1;
    expect(scope.list[lastIndexOfList]).toEqual("Barranquilla");
  }); 
});
