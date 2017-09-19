angular.module('myApp',[]).controller('ToDoCntrl',function($scope){
    //$scope.totaltodos=4;
    
    
    $scope.todos=[
        {text:'Collect Money',done:false},
        {text:'Cosmetics',done:false}
        ]
        $scope.getTotalTodos=function(){
            return $scope.totaltodos=$scope.todos.length;

        }
        
        $scope.todoAdd=function(){
            $scope.todos.push({text:$scope.formTodo,done:false});
            $scope.formTodo='';
            
            
        }
})

// function ToDoCntrl($Scope)
// {
//     $Scope.name='Sowmya';
//     $Scope.id='3232';
    


//
// }
