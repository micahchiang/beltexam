var blackbelt = angular.module('blackbelt', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: '/partials/dashboard.html'
		})
	})