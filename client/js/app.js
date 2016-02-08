var blackbelt = angular.module('blackbelt', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/partials/login.html'
		})
	})