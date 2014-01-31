function AppController($scope, $timeout) {
    var tocar = function(som) {
        var audio = new Audio('/audio/' + som + '.ogg');
        audio.play();
    };

    var init = function() {
        $scope.config = true;
        $scope.ocupado = false;
        $scope.acao = "Serie";
        $scope.nMinTreino = 0;
        $scope.nSegTreino = 0;
        $scope.nMinDescanso = 0;
        $scope.nSegDescanso = 0;
        $scope.serie = 1;



        $scope.n60 = [];
        for (var i = 0, a = 0; i < 61; i = i + 5) {
            $scope.n60[a++] = i;
        }
        $scope.n10 = [];
        for (var i = 1; i < 11; i++) {
            $scope.n10[i] = i;
        }
    };

    init();

    var contar = function() {
        
        $scope.tempo = $scope.tempo - 1;
        $scope.segundos = $scope.tempo % 60;
        $scope.minutos = ($scope.tempo - $scope.segundos) / 60;
        if ($scope.segundos < 10) {
            $scope.segundos = "0" + $scope.segundos;
        }
        if ($scope.minutos < 10) {
            $scope.minutos = "0" + $scope.minutos;
        }
        if($scope.tempo === 10 || $scope.tempo <= 5 ){
            tocar("alarm");
        }
        if ($scope.tempo === 0) {
            tocar("alarm");
            if ($scope.tempoSerie) {
                switch ($scope.acao) {
                    case "Serie":
                        $scope.serie--;
                        if ($scope.serie !== 0) {
                            $scope.acao = "Descanso";
                            var div = document.getElementById("divAcao");
                            div.setAttribute("class", "alert alert-danger text-center");
                            $scope.tempo = $scope.tempoDescanso;
                            $scope.segundos = $scope.tempo % 60;
                            $scope.minutos = ($scope.tempo - $scope.segundos) / 60;
                            if ($scope.segundos < 10) {
                                $scope.segundos = "0" + $scope.segundos;
                            }
                            if ($scope.minutos < 10) {
                                $scope.minutos = "0" + $scope.minutos;
                            }
                            $timeout(contar, 1000);
                        } else {
                            $scope.ocupado = false;
                            $scope.config = true;
                            $scope.serie = 1;
                        }
                        break;
                    case "Descanso":
                        $scope.acao = "Serie";
                        var div = document.getElementById("divAcao");
                        div.setAttribute("class", "alert alert-success text-center");
                        $scope.tempo = $scope.tempoSerie;
                        $scope.segundos = $scope.tempo % 60;
                        $scope.minutos = ($scope.tempo - $scope.segundos) / 60;
                        if ($scope.segundos < 10) {
                            $scope.segundos = "0" + $scope.segundos;
                        }
                        if ($scope.minutos < 10) {
                            $scope.minutos = "0" + $scope.minutos;
                        }
                        $timeout(contar, 1000);
                        break;
                }
            } else {
                $scope.tempo = $scope.tempoDescanso;
                $scope.ocupado = false;
            }
        } else {
            $timeout(contar, 1000);
        }
    };

    $scope.iniciar = function() {
        $scope.config = false;
        $scope.tempoSerie = $scope.nMinTreino * 60 + $scope.nSegTreino;
        $scope.tempoDescanso = $scope.nMinDescanso * 60 + $scope.nSegDescanso;
        if ($scope.tempoSerie === 0) {
            $scope.acao = "Descanso";
            var div = document.getElementById("divAcao");
            div.setAttribute("class", "alert alert-danger text-center");
            $scope.serie--;
            $scope.tempo = $scope.tempoDescanso;
        } else {
            $scope.acao = "Serie";
            var div = document.getElementById("divAcao");
            div.setAttribute("class", "alert alert-success text-center");
            $scope.tempo = $scope.tempoSerie;
        }
        if ($scope.serie === 0) {
            $scope.ocupado = false;
            $scope.config = true;
            $scope.serie = 1;
        } else {
            $scope.ocupado = true;
            contar();
        }
    };


}


