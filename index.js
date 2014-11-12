var app=angular.module('Defense',[]);
app.controller('DefenseCtrl',function($scope,$window){
    $scope.state=1;
    $scope.highScores=[];
    $scope.img=[
		{
			id:'map1',
			src:'img/map1.jpg'
		},
		{
			id:'map2',
			src:'img/map2.jpg'
		},
		{
			id:'map3',
			src:'img/map3.jpg'
		}
	];
    for(var i=0;i<10;i++){
    	var highScore={highScore:((new Date()).getTime()),auth:'John'};
    	$scope.highScores.push(highScore);
    }
    $scope.play=function(){
    	$scope.state=4;
    }
    $scope.goToPlay=function(id){
		$scope.url='img-container-'+id;
		$scope.state=6;		
	}
});
	