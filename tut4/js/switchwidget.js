window.onload = function (){
var s,
SwitchWidget = {
  settings: {
    blackColor : "#000",
    grayColor :"#808080",
    yellowColorCode:"##FFFF00",
    switchDefaultState : "OFF",
    switchstatus :"show-swicth-current-state",
    switchButton :"switchbutton",
    swicth : "swicthContainer"
  },
  init: function() {
    s = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    SwitchWidget.getbyID(s.switchButton).onclick = function(){
      SwitchWidget.updateSwitchStatus();
    };

    SwitchWidget.getbyID("capture").onclick = function () {
       SwitchWidget.toggleSwitchStyle();
    }

  },

  updateSwitchStatus: function()
  {
    if(s.switchDefaultState == "OFF")
    {
      s.switchDefaultState = "ON";
      SwitchWidget.getbyID(s.swicth).style.backgroundColor = s.yellowColorCode;
      SwitchWidget.alternate(s.blackColor,s.grayColor);
    }
    else
    {
      s.switchDefaultState = "OFF";
      SwitchWidget.getbyID(s.swicth).style.backgroundColor = "";
      SwitchWidget.alternate(s.grayColor,s.blackColor);
    }
    SwitchWidget.updateCurrentState(s.switchDefaultState);
  },

  updateCurrentState:function(currentState)
  {
    SwitchWidget.getbyID(s.switchstatus).innerHTML = "Switch is "+ currentState;
    if (currentState == "ON")
    {
      SwitchWidget.getbyID('switchbutton').innerHTML="ON";
      SwitchWidget.getbyID('info').innerHTML="Hello";
      setTimeout(function(){ switchStateInfo.innerHTML = ""; }, 5000);

    }
    else
    {
      SwitchWidget.getbyID('switchbutton').innerHTML="OFF";
      SwitchWidget.getbyID('info').innerHTML="";
    }
  },
  alternate:function(c1,c2){
    if(document.getElementsByTagName){
      var table =  SwitchWidget.getbyID("bcolor");
      var rows = table.getElementsByTagName("li");
      for(i = 0; i < rows.length; i++){
          if(i%2==0){
            rows[i].style.backgroundColor = c1;
          }else{
            rows[i].style.backgroundColor = c2;
          }
      }
    }
  },

  toggleSwitchStyle:function()
  {
    if(SwitchWidget.getbyID('capture').checked)
    {
      SwitchWidget.getbyID('switchbutton').style.backgroundColor = "green";
    }
    else
    {
      SwitchWidget.getbyID('switchbutton').style.backgroundColor = "";
    }
  },

  getbyID: function(element){
    return document.getElementById(element);
  }
};
  SwitchWidget.init();
}