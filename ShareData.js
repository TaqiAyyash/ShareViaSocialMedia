define(['ojs/ojcore', 'knockout' 'ojs/ojbutton','ojs/ojinputtext'
], function (oj, ko) {
    function ShareData() {
      var self = this;
      self.dataField=ko.observable(); 
        
        self.Share = function () {
            navigator.share(self.dataField());
        };
        self.disconnected = function () {
            // Implement if needed
               
        };
       
    }
    return ShareData;
});
