angular.module('ngDevConf').controller('homeCtrl', function ($scope) {
    $scope.vm = {
        organizers: [
            {
                "logo": "../img/logoUNIVPM.png",
                "text": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."
            },
            {
                "logo": "../img/gdi-logo-03.png",
                "text": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Crasmattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
            },
            {
                "logo": "../img/devmarche.png",
                "text": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
            }
        ]
    }
});
