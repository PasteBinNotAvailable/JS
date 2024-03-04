hwid = btoa(`{window.navigator}{screen.height}{screen.width}`).split("==")[0];
return hwid;
