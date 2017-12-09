
var app = angular.module('jobAdvisor',[ ]);

app.controller('usuarioCtrl', function($scope){

	$scope.usuario = usuarioData;
	
	
	$scope.guardarUsuario = function(){


	}

	$scope.cancelarUsuario = function(){

		$scope.usuario={};

	}

});

var usuarioData = {
	aliasUser: "alias",
	nombreUser: "Jesus",
	apellidosUser:"at",
	fechaNacimientoUser: "25/85/52",
	generoUser:"genero",
	tituloSupUser:"tituloSup",
	passwordUser:"password",
	password2User:"password2",
	mailUser:"mail"
	
}

