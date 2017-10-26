var  mainApp  =  angular.module("myApp", []);
mainApp.controller("appController", function ($scope, $http) { 
    CoinData();
    setInterval(function () {
        CoinData();
    }, 300000);

    function CoinData() {
        $http({
            method: "GET",
            url: "https://api.coinmarketcap.com/v1/ticker/?limit=10"
        }).then(function mySuccess(response) {
            $scope.items = response.data;
            plotChart($scope.items);
        }, function myError(response) {
            $scope.items = response.statusText;
        });
    }

    function plotChart(arg1) {
        var label = [];
        var value = [];
        for (var i = 0; i < arg1.length; i++) {
            label.push(arg1[i].name);
            value.push(arg1[i].price_usd);
        }
        new Chart(document.getElementById("canvas"), {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                    label: "USD",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: value
                }]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Crytocurrency Rate in $'
                }
            }
        });
    }
});