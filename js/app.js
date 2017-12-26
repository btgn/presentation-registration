const midTerm = angular.module('ModulesRegistration', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
        controller: 'MainView',
        templateUrl: 'views/main.html'
    })
        .when('/signup', {
        templateUrl: 'views/signup.html'
    })
        .otherwise({
        redirectTo: '/index.html'
    })
}])
midTerm.controller('MainView',['$scope', function($scope) {
    $scope.module=[]
    let obj_module = {}
    obj_module.students = []
    $scope.addModule=function(node_module,website){

        obj_module.first = '', last = '', email = ''
        let index=0;
        for(i=0;i<$scope.module.length;i++){
            if($scope.module[i].module_name.includes(node_module)){
                index++;

            }
        }
        if(index!=0){
            obj_module.module_name=node_module+(index);
            obj_module.site=website;
            $scope.module.push(obj_module)
            obj_module={};
        }
        else{
            obj_module.module_name=node_module.toLowerCase();
            obj_module.site=website;
            $scope.module.push(obj_module)
            obj_module={};
        }
    }

    $scope.addStudentToGroup=function(first,last,email,node_module){
        let stu = {
            first: first,
            last: last,
            email: email       

        }
        for(let i=0; i<$scope.module.length;i++){
            if($scope.module[i].module_name == node_module){
                $scope.module[i].first=stu.first
                $scope.module[i].last=stu.last
                $scope.module[i].email=stu.email
            }
        }
        stu={}
    }

    $scope.removeStudentFromGroup=function(email){
        let stu = {
            first: '',
            last: '',
            email: ''       
        }
        for(i=0;i<$scope.module.length;i++){
            if($scope.module[i].email==email){
                $scope.module[i].first=stu.first;
                $scope.module[i].last=stu.last;
                $scope.module[i].email=stu.email;
            }
        }
    }

    $scope.removeGroup=function(group_module){
        $scope.module.splice($scope.module.indexOf(group_module), 1)
    }

    $scope.toggle = function() {
        $scope.myHide = !$scope.myHide 
        let elem = document.getElementById("hide")
        if(elem.value == "Hide Form")
            elem.value = "Show Form"
         else  
            elem.value = "Hide Form"
    } 
    
    $scope.hideSignUp = function() {
        $scope.signUp = !$scope.signUp 
        let elem = document.getElementById("signup")
        if(elem.value == "Hide Form")
            elem.value = "Show Form"
         else  
            elem.value = "Hide Form"
    }
    
}])
