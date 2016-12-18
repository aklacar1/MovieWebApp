'use strict';
app.controller('tvController', ['$scope', 'tvService', function ($scope, tv) {
    $scope.tvList = [];
    $scope.searchText = '';

    function GetTopRated() {
        $scope.tvList = [];
        tv.GetTopRated().then(function (response) {
            var data = response.data.results;
            for (var i = 0; i < 10; i++) {

                var img_path = 'https://image.tmdb.org/t/p/w500' + data[i].poster_path;
                if (data[i].poster_path == null) {
                    img_path = 'https://image.tmdb.org/t/p/w500' + data[i].backdrop_path;
                    if (data[i].backdrop_path == null) {
                        img_path = 'http://image.prntscr.com/image/c9952ad889a2438ba0e91013f97514d2.png';
                    }
                }
                $scope.tvList.push({ title: data[i].name, img: img_path, overview: data[i].overview });
            }
        });
    };

    GetTopRated();

    $scope.search = function () {
        if ($scope.searchText.length >= 3) {
            $scope.tvList = [];
            var query = $scope.searchText;
            tv.Search(query).then(function (response) {
                var data = response.data.results;
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var img_path = 'https://image.tmdb.org/t/p/w500' + data[i].poster_path;
                    if (data[i].poster_path == null) {
                        img_path = 'http://image.prntscr.com/image/c9952ad889a2438ba0e91013f97514d2.png';
                    }
                    $scope.tvList.push({ title: data[i].name, img: img_path, overview: data[i].overview });
                }
            });
        }
        else if ($scope.searchText.length == 0) {
            GetTopRated();
        }
    }


    $scope.modalData = {};
    $scope.setModalValue = function (data) {
        $scope.modalData = data;
    }
}]);