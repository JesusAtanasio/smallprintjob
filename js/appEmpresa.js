
var app = angular.module('jobAdvisor',[ ]);

app.controller('empresaCtrl', function(){

	this.empresa = empresaData;
	
});

var empresaData = {
	CIF:"1R",
	nombreEmpresa: "Axpe Consulting",
	sectorEmpresa:"Informática",
	direccionEmpresa: "Arturo Soria",
	localidadEmpresa:"Madrid",
	provinciaEmpresa:"Madrid",
	paisEmpresa:"España",
	cod_postalEmpresa:"28029",
	sedeEmpresa:"Madrid",
	webEmpresa:"axpe.com"
	
}