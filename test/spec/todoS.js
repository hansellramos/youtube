'use strict';

describe('First Test',function(){
  var scope = {};
  beforeEach(function(){
    module('todo');
    inject(function($controller){
      $controller('TodoController',{$scope:scope});
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
