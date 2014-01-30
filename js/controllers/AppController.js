function AppController($scope, $timeout) {
    var init = function() {
        $scope.config = true;
        $scope.serie = 3;
        $scope.tempoSerie = 30;
        $scope.descanso = 60;
        $scope.ocupado = false;
        $scope.acao = "Serie";
    };

    init();

    var contar = function() {
        $scope.tempo = $scope.tempo - 1;
        if ($scope.tempo === 0) {
            if ($scope.tempoSerie) {
                switch($scope.acao){
                    case "Serie":
                        $scope.serie--;
                        if($scope.serie !== 0){
                            $scope.acao = "Descanso";
                            $scope.tempo = $scope.descanso;
                            $timeout(contar, 1000);
                        } else {
                            $scope.ocupado = false;
                        }
                        break;
                    case "Descanso":
                        $scope.acao = "Serie";
                        $scope.tempo = $scope.tempoSerie;
                        $timeout(contar, 1000);
                        break;
                }
            } else {
                $scope.tempo = $scope.descanso;
                $scope.ocupado = false;
            }
        } else {
            $timeout(contar, 1000);
        }
    };

    $scope.iniciar = function() {
        if(!$scope.tempoSerie){
            $scope.acao = "Descanso";
            $scope.serie--;
            $scope.tempo = $scope.descanso;
        } else {
            $scope.acao = "Serie";
            $scope.tempo = $scope.tempoSerie;
        }
        if ($scope.serie === 0) {
            alert("Acabaram suas series");
        } else {
            $scope.ocupado = true;
            contar();
        }
    };



}


