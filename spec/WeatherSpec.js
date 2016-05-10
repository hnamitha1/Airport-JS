'use strict';

describe('Weather',function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('gives stormy sometimes', function(){
    spyOn(Math,'random').and.returnValue(true);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('gives not stormy other times', function(){
    spyOn(Math,'random').and.returnValue(false);
    expect(weather.isStormy()).toBeFalsy();
  });
});